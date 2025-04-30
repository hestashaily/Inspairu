// import { z } from "zod";
// import { feed_media_media_type, feeds_feed_type } from "@prisma/client";

// export const FeedMediaSchema = z.object({
//   thumbnailUrl: z.string().url("Thumbnail URL must be a valid URL"),
//   mediaUrl: z.string().url("Media URL must be a valid URL"),
//   mediaType: z.enum(
//     Object.values(feed_media_media_type) as [string, ...string[]]
//   ),
// });

// const BaseFeedSchema = z.object({
//   caption: z.string().nullable().optional(),
//   description: z.string().nullable().optional(),
//   prompt: z.string().nullable().optional(),
//   generatedText: z.string().nullable().optional(),
//   hashtags: z.array(z.string()).optional().default([]),
//   aiTools: z.array(z.number().int().positive()).optional().default([]),
//   media: z.array(FeedMediaSchema).optional().default([]),
// });

// export const CreateFeedSchema = BaseFeedSchema.extend({
//   feedType: z
//     .enum(Object.values(feeds_feed_type) as [string, ...string[]])
//     .optional(),
// });

// export const UpdateFeedSchema = BaseFeedSchema;

// export const FeedIdSchema = z.union([
//   z.bigint(),
//   z
//     .number()
//     .int()
//     .positive()
//     .transform((val) => BigInt(val)),
//   z.string().transform((val) => BigInt(val)),
// ]);

// export const ReportFeedSchema = z.object({
//   feedId: FeedIdSchema,
//   message: z.string().min(1, "Message is required"),
// });

// export const GetAllFeedsSchema = z.object({
//   limit_count: z.number().int().positive().default(10),
//   offset_count: z.number().int().nonnegative().default(0),
// });

// export const GetMyFeedsSchema = z.object({
//   q: z.string().nullable(),
//   aiTools: z.array(z.number().int().positive()).nullable(),
//   hashtags: z.array(z.string()).nullable(),
//   limit_count: z.number().int().positive().default(10),
//   offset_count: z.number().int().nonnegative().default(0),
// });

// export const FeedUuidSchema = z.string().uuid("Invalid feed UUID format");

// export const GetOthersFeedsSchema = z.object({
//   other_uid: FeedIdSchema,
//   limit_count: z.number().int().positive().default(10),
//   offset_count: z.number().int().nonnegative().default(0),
// });

// export const GetSearchedFeedsSchema = z.object({
//   q: z.string().nullable(),
//   aiTools: z.array(z.number().int().positive()).nullable(),
//   hashtags: z.array(z.string()).nullable(),
//   limit_count: z.number().int().positive().default(10),
//   offset_count: z.number().int().nonnegative().default(0),
// });

// export type CreateFeedInput = z.infer<typeof CreateFeedSchema>;
// export type UpdateFeedInput = z.infer<typeof UpdateFeedSchema>;
// export type ReportFeedInput = z.infer<typeof ReportFeedSchema>;
// export type GetAllFeedsInput = z.infer<typeof GetAllFeedsSchema>;
// export type GetMyFeedsInput = z.infer<typeof GetMyFeedsSchema>;
// export type GetOthersFeedsInput = z.infer<typeof GetOthersFeedsSchema>;
// export type GetSearchedFeedsInput = z.infer<typeof GetSearchedFeedsSchema>;
