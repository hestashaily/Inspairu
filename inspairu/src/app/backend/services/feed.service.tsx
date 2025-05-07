import { PrismaClient, feeds_feed_type } from "@prisma/client";
import { CreateFeedModel } from "../model/feed.model";
import { z } from "zod";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";

const prisma = new PrismaClient();

export const createFeedService = async (
  input: z.infer<typeof CreateFeedModel>,
  userId: bigint
) => {
  const { caption, description, prompts, feedType, aiTools, hashtags } = input;
  console.log("thia is prompt value", prompts);
  return await prisma.$transaction(async (tx) => {
    const feed = await tx.feeds.create({
      data: {
        user_id: userId,
        caption,
        description,
        prompt:prompts,
        feed_type: feedType as feeds_feed_type | undefined,
        feed_uuid: crypto.randomUUID(),
      },
    });
    if (aiTools && aiTools.length > 0) {
      await tx.feed_ai_tool.createMany({
        data: aiTools.map((tool) => ({
          feed_id: Number(feed.id),
          ai_tool_id: tool.id,
        })),
      });
    }
    if (hashtags && Array.isArray(hashtags)) {
      const parsedHashtags = hashtags
        .flatMap((tagStr) => tagStr.split(/[\s,]+/))
        .filter((tag) => tag.trim() !== "")
        .map((tag) => (tag.startsWith("#") ? tag.trim() : `#${tag.trim()}`));

      if (parsedHashtags.length > 0) {
        await tx.feed_hashtag.createMany({
          data: parsedHashtags.map((tag) => ({
            feed_id: feed.id,
            hashtag: tag,
          })),
          skipDuplicates: true,
        });
      }
    }
    return feed;
  });
};

export const callAllFeedServices = async (
  p_user_id: bigint,
  limit_count: number,
  offset_count: number
) => {
  const [rows] = await pool.query<RowDataPacket[][]>(
    "CALL get_all_feeds(?, ?, ?)",
    [p_user_id, limit_count, offset_count]
  );

  // console.log("Full rows from DB:", rows); // rows[0] is the array of feed records
  return { data: rows[0] };
};
