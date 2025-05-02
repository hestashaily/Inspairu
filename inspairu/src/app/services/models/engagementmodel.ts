import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { RowDataPacket } from "mysql2";

class EngagementService {
  async addReaction(userId: bigint, feed_id: bigint) {
    await prisma.$transaction(async (tx) => {
      await tx.reactions.upsert({
        where: {
          feed_id_reacted_by: {
            feed_id,
            reacted_by: userId,
          },
        },
        create: {
          feed_id,
          reacted_by: userId,
        },
        update: {
          created_datetime: new Date(),
        },
      });

      await tx.feeds.update({
        where: { id: feed_id },
        data: {
          total_likes_count: {
            increment: 1,
          },
        },
      });
    });
  }

  async removeReaction(userId: bigint, feed_id: bigint) {
    await prisma.$transaction(async (tx) => {
      await tx.reactions.delete({
        where: {
          feed_id_reacted_by: {
            feed_id,
            reacted_by: userId,
          },
        },
      });

      await tx.feeds.update({
        where: { id: feed_id },
        data: {
          total_likes_count: {
            decrement: 1,
          },
        },
      });
    });
  }

  async addView(userId: bigint, feed_id: bigint) {
    await prisma.$transaction(async (tx) => {
      await tx.views.upsert({
        where: {
          viewed_by_feed_id: {
            feed_id,
            viewed_by: userId,
          },
        },
        create: {
          feed_id,
          viewed_by: userId,
        },
        update: {
          created_datetime: new Date(),
        },
      });

      await tx.feeds.update({
        where: { id: feed_id },
        data: {
          total_views_count: {
            increment: 1,
          },
        },
      });
    });
  }

  async removeView(userId: bigint, feed_id: bigint) {
    await prisma.$transaction(async (tx) => {
      await tx.views.delete({
        where: {
          viewed_by_feed_id: {
            feed_id,
            viewed_by: userId,
          },
        },
      });

      await tx.feeds.update({
        where: { id: feed_id },
        data: {
          total_views_count: {
            decrement: 1,
          },
        },
      });
    });
  }

  async getAllViews(feed_id: bigint, page: number, limit: number) {
    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_all_content_views(?, ?, ?)",
      [feed_id, page, limit]
    );
    return rows[0];
  }

  async getAllReactions(feed_id: bigint, page: number, limit: number) {
    const [rows] = await pool.query<RowDataPacket[][]>(
      "CALL get_all_content_reactions(?, ?, ?)",
      [feed_id, page, limit]
    );
    return rows[0];
  }
}

export default new EngagementService();
