// import pool from "@/lib/db";
// import { prisma } from "@/lib/prisma";
// import { RowDataPacket } from "mysql2";
// import { z } from "zod";

// class FeedService {
//   public async createFeed(userID: bigint, data: any): Promise<void> {
//     try {
//       await prisma.$transaction(async (prisma) => {
//         const newFeed = await prisma.feeds.create({
//           data: {
//             user_id: userID,
//             caption: data.caption,
//             description: data.description,
//             prompt: data.prompt,
//             feed_type: data.feedType,
//             generated_text: data.generatedText,
//             feed_uuid: crypto.randomUUID(),
//           },
//         });

//         if (data.media && data.media.length > 0) {
//           await Promise.all(
//             data.media.map((m: any) =>
//               prisma.feed_media.create({
//                 data: {
//                   id: BigInt(Date.now() + Math.floor(Math.random() * 1000)),
//                   feed_id: newFeed.id,
//                   thumbnail_url: m.thumbnailUrl,
//                   media_url: m.mediaUrl,
//                   media_type: m.mediaType,
//                 },
//               })
//             )
//           );
//         }

//         if (data.hashtags && data.hashtags.length > 0) {
//           await Promise.all(
//             data.hashtags.map((hashtag: string) =>
//               prisma.feed_hashtag.create({
//                 data: {
//                   feed_id: newFeed.id,
//                   hashtag: hashtag,
//                 },
//               })
//             )
//           );
//         }

//         if (data.aiTools && data.aiTools.length > 0) {
//           await Promise.all(
//             data.aiTools.map((toolId: number) =>
//               prisma.feed_ai_tool.create({
//                 data: {
//                   feed_id: newFeed.id,
//                   ai_tool_id: toolId,
//                 },
//               })
//             )
//           );
//         }
//       });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async updateFeed(
//     id: bigint,
//     userID: bigint,
//     data: any
//   ): Promise<void> {
//     try {
//       const existingFeed = await prisma.feeds.findUnique({
//         where: { id },
//       });

//       if (!existingFeed) throw new Error("Feed not found");
//       if (existingFeed.user_id !== userID) throw new Error("Not authorized");

//       await prisma.$transaction(async (tx) => {
//         await tx.feeds.update({
//           where: { id },
//           data: {
//             caption: data.caption,
//             description: data.description,
//             prompt: data.prompt,
//             generated_text: data.generatedText,
//             updated_at: new Date(),
//           },
//         });

//         if (Array.isArray(data.media)) {
//           await tx.feed_media.deleteMany({ where: { feed_id: id } });

//           for (const m of data.media) {
//             await tx.feed_media.create({
//               data: {
//                 id: BigInt(Date.now() + Math.floor(Math.random() * 1000)),
//                 feed_id: id,
//                 thumbnail_url: m.thumbnailUrl,
//                 media_url: m.mediaUrl,
//                 media_type: m.mediaType,
//               },
//             });
//           }
//         }

//         if (Array.isArray(data.hashtags)) {
//           await tx.feed_hashtag.deleteMany({ where: { feed_id: id } });

//           for (const hashtag of data.hashtags) {
//             await tx.feed_hashtag.create({
//               data: {
//                 feed_id: id,
//                 hashtag: hashtag,
//               },
//             });
//           }
//         }

//         if (Array.isArray(data.aiTools)) {
//           await tx.feed_ai_tool.deleteMany({ where: { feed_id: id } });

//           for (const toolId of data.aiTools) {
//             await tx.feed_ai_tool.create({
//               data: {
//                 feed_id: id,
//                 ai_tool_id: toolId,
//               },
//             });
//           }
//         }
//       });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//     return;
//   }

//   public async deleteFeed(id: bigint, userID: bigint) {
//     const existingFeed = await prisma.feeds.findUnique({ where: { id } });
//     if (!existingFeed) throw new Error("Feed not found");
//     if (existingFeed.user_id !== userID) throw new Error("Not authorized");

//     return prisma.feeds.update({
//       where: { id },
//       data: { is_deleted: true },
//     });
//   }

//   public async reportFeed(data: {
//     feedId: bigint;
//     blockedBy: bigint;
//     message: string;
//   }) {
//     try {
//       return prisma.report_feeds.create({
//         data: {
//           feed_id: data.feedId,
//           blocked_by: data.blockedBy,
//           message: data.message,
//           created_datetime: new Date(),
//           updated_datetime: new Date(),
//         },
//       });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async getAllFeeds(
//     userId: bigint,
//     limit_count: number,
//     offset_count: number
//   ) {
//     try {
//       const [rows] = await pool.query<RowDataPacket[][]>(
//         "CALL get_all_feeds(?, ?, ?)",
//         [userId, limit_count, offset_count]
//       );
//       return rows[0];
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async getFeedDetailsByUuid(feedUuid: string, userId: bigint) {
//     try {
//       const [rows]: any = await pool.query(
//         "CALL get_feed_details_by_feed_uuid(?, ?)",
//         [userId, feedUuid]
//       );
//       return rows[0][0];
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async getMyFeeds(
//     userId: bigint,
//     q: string | null,
//     aiTools: number[] | null,
//     hashtags: string[] | null,
//     limit_count: number,
//     offset_count: number
//   ) {
//     try {
//       const aiToolsJson = aiTools ? JSON.stringify(aiTools) : null;
//       const hashtagsJson = hashtags ? JSON.stringify(hashtags) : null;

//       const [rows] = await pool.query<RowDataPacket[][]>(
//         "CALL get_my_feeds(?, ?, ?, ?, ?, ?)",
//         [userId, q, aiToolsJson, hashtagsJson, limit_count, offset_count]
//       );
//       return rows[0];
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async getOthersFeeds(
//     userId: bigint,
//     otherUserId: bigint,
//     limit_count: number,
//     offset_count: number
//   ) {
//     try {
//       const [rows] = await pool.query<RowDataPacket[][]>(
//         "CALL get_others_feeds(?, ?, ?, ?)",
//         [userId, otherUserId, limit_count, offset_count]
//       );
//       return rows[0];
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }

//   public async getSearchedFeeds(
//     userId: bigint,
//     q: string | null,
//     aiTools: number[] | null,
//     hashtags: string[] | null,
//     limit_count: number,
//     offset_count: number
//   ) {
//     try {
//       const aiToolsJson = aiTools ? JSON.stringify(aiTools) : null;
//       const hashtagsJson = hashtags ? JSON.stringify(hashtags) : null;

//       const [rows] = await pool.query<RowDataPacket[][]>(
//         "CALL get_searched_feeds(?, ?, ?, ?, ?, ?)",
//         [userId, q, aiToolsJson, hashtagsJson, limit_count, offset_count]
//       );
//       return rows[0];
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         throw new Error(
//           `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
//         );
//       }
//       throw error;
//     }
//   }
// }

// export default new FeedService();
