import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { RowDataPacket } from "mysql2";

class FeedService {
  public async createFeed(userID: bigint, data: any): Promise<void> {
    const newFeed = await prisma.feeds.create({
      data: {
        user_id: userID,
        caption: data.caption,
        description: data.description,
        prompt: data.prompt,
        feed_type: data.feedType,
        generated_text: data.generatedText,
        feed_uuid: crypto.randomUUID(),
      },
    });

    // If media is provided, insert them separately using the created feed ID
    if (data.media && data.media.length > 0) {
      for (const m of data.media) {
        await prisma.feed_media.create({
          data: {
            id: BigInt(Date.now() + Math.floor(Math.random() * 1000)), // Generate unique ID
            feed_id: newFeed.id,
            thumbnail_url: m.thumbnailUrl,
            media_url: m.mediaUrl,
            media_type: m.mediaType,
          },
        });
      }
    }

    // Add hashtags if provided
    if (data.hashtags && data.hashtags.length > 0) {
      for (const hashtag of data.hashtags) {
        await prisma.feed_hashtag.create({
          data: {
            feed_id: newFeed.id,
            hashtag: hashtag,
          },
        });
      }
    }

    // Add AI tools if provided
    if (data.aiTools && data.aiTools.length > 0) {
      for (const toolId of data.aiTools) {
        await prisma.feed_ai_tool.create({
          data: {
            feed_id: newFeed.id,
            ai_tool_id: toolId,
          },
        });
      }
    }

    return;
  }

  public async updateFeed(
    id: BigInt,
    userID: BigInt,
    data: any
  ): Promise<void> {
    const existingFeed = await prisma.feeds.findUnique({
      where: { id },
    });

    if (!existingFeed) throw new Error("Feed not found");
    if (existingFeed.user_id !== userID) throw new Error("Not authorized");

    await prisma.$transaction(async (tx) => {
      // Update basic feed fields
      await tx.feeds.update({
        where: { id },
        data: {
          caption: data.caption,
          description: data.description,
          prompt: data.prompt,
          generated_text: data.generatedText,
          updated_at: new Date(),
        },
      });

      // Update media if provided (replace strategy)
      if (Array.isArray(data.media)) {
        // Delete existing media
        await tx.feed_media.deleteMany({ where: { feed_id: id } });

        // Insert new media
        for (const m of data.media) {
          await tx.feed_media.create({
            data: {
              id: BigInt(Date.now() + Math.floor(Math.random() * 1000)), // Generate unique ID
              feed_id: id,
              thumbnail_url: m.thumbnailUrl,
              media_url: m.mediaUrl,
              media_type: m.mediaType,
            },
          });
        }
      }

      // Update hashtags if provided
      if (Array.isArray(data.hashtags)) {
        // Delete existing hashtags
        await tx.feed_hashtag.deleteMany({ where: { feed_id: id } });

        // Insert new hashtags
        for (const hashtag of data.hashtags) {
          await tx.feed_hashtag.create({
            data: {
              feed_id: id,
              hashtag: hashtag,
            },
          });
        }
      }

      // Update AI tools if provided
      if (Array.isArray(data.aiTools)) {
        // Delete existing AI tool associations
        await tx.feed_ai_tool.deleteMany({ where: { feed_id: id } });

        // Insert new AI tool associations
        for (const toolId of data.aiTools) {
          await tx.feed_ai_tool.create({
            data: {
              feed_id: id,
              ai_tool_id: toolId,
            },
          });
        }
      }
    });
    return;
  }

  public async deleteFeed(id: BigInt, userID: BigInt) {
    const existingFeed = await prisma.feeds.findUnique({ where: { id } });
    if (!existingFeed) throw new Error("Feed not found");
    if (existingFeed.user_id !== userID) throw new Error("Not authorized");

    return prisma.feeds.update({
      where: { id },
      data: { is_deleted: true },
    });
  }

  public async reportFeed(data: {
    feedId: BigInt;
    blockedBy: BigInt;
    message: string;
  }) {
    return prisma.report_feeds.create({
      data: {
        feed_id: data.feedId,
        blocked_by: data.blockedBy,
        message: data.message,
        created_datetime: new Date(),
        updated_datetime: new Date(),
      },
    });
  }

  public async getAllFeeds(
    userId: BigInt,
    limit_count: number,
    offset_count: number
  ) {
    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_all_feeds(?, ?, ?)",
      [userId.toString(), limit_count, offset_count]
    );
    return rows[0];
  }

  public async getFeedDetailsByUuid(feedUuid: string, userId: BigInt) {
    const [rows]: any = await pool.query(
      "CALL get_feed_details_by_feed_uuid(?, ?)",
      [userId.toString(), feedUuid]
    );
    return rows[0][0];
  }

  public async getMyFeeds(
    userId: BigInt,
    q: string | null,
    aiTools: number[] | null,
    hashtags: string[] | null,
    limit_count: number,
    offset_count: number
  ) {
    // Convert aiTools and hashtags to JSON strings for stored procedure
    const aiToolsJson = aiTools ? JSON.stringify(aiTools) : null;
    const hashtagsJson = hashtags ? JSON.stringify(hashtags) : null;

    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_my_feeds(?, ?, ?, ?, ?, ?)",
      [
        userId.toString(),
        q,
        aiToolsJson,
        hashtagsJson,
        limit_count,
        offset_count,
      ]
    );
    return rows[0];
  }

  public async getOthersFeeds(
    userId: BigInt,
    otherUserId: BigInt,
    limit_count: number,
    offset_count: number
  ) {
    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_others_feeds(?, ?, ?, ?)",
      [userId.toString(), otherUserId.toString(), limit_count, offset_count]
    );
    return rows[0];
  }

  public async getSearchedFeeds(
    userId: BigInt,
    q: string | null,
    aiTools: number[] | null,
    hashtags: string[] | null,
    limit_count: number,
    offset_count: number
  ) {
    // Convert aiTools and hashtags to JSON strings for stored procedure
    const aiToolsJson = aiTools ? JSON.stringify(aiTools) : null;
    const hashtagsJson = hashtags ? JSON.stringify(hashtags) : null;

    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_searched_feeds(?, ?, ?, ?, ?, ?)",
      [
        userId.toString(),
        q,
        aiToolsJson,
        hashtagsJson,
        limit_count,
        offset_count,
      ]
    );
    return rows[0];
  }
}

export default new FeedService();
