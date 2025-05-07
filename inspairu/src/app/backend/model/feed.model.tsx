import { z } from "zod";
import { feed_media_media_type, feeds_feed_type } from "@prisma/client";

export const feedMediaSchema = z.object({
  thumbnail: z.string().url("Thumbnail Url Must Be Vailed"),
  mediaURL: z.string().url("Media URL Is Needed"),
  mediaTypes: z.enum(Object.values(feed_media_media_type) as [string]),
});

const BasicFeedSchemas = z.object({
  caption: z.string().min(1, "Caption is required"),
  aiTools: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  prompts: z.string().default("").optional(),
  hashtags: z.array(z.string()).default([]),
  description: z.string().optional().default(""),
  genratedText: z.string().optional().default(""),
});

export const CreateFeedModel = BasicFeedSchemas.extend({
  feedType: z
    .enum(Object.values(feeds_feed_type) as [string, ...string[]])
    .optional(),
});

export const UpdateFeedSchema = BasicFeedSchemas;

export const FeedIdSchema = z.union([
  z.bigint(),
  z
    .number()
    .int()
    .positive()
    .transform((val) => BigInt(val)),
  z.string().transform((val) => BigInt(val)),
]);

export const ReportFeedSchema = z.object({
  feedId: FeedIdSchema,
  message: z.string().min(1, "Message is required"),
});

export const GetAllFeedsSchema = z.object({
  limit_count: z.number().int().positive().default(10),
  offset_count: z.number().int().nonnegative().default(0),
});

export const GetMyFeedsSchema = z.object({
  q: z.string().nullable(),
  aiTools: z.array(z.number().int().positive()).nullable(),
  hashtags: z.array(z.string()).nullable(),
  limit_count: z.number().int().positive().default(10),
  offset_count: z.number().int().nonnegative().default(0),
});

export const FeedUuidSchema = z.string().uuid("Invalid feed UUID format");

export const GetOthersFeedsSchema = z.object({
  other_uid: FeedIdSchema,
  limit_count: z.number().int().positive().default(10),
  offset_count: z.number().int().nonnegative().default(0),
});

export const GetSearchedFeedsSchema = z.object({
  q: z.string().nullable(),
  aiTools: z.array(z.number().int().positive()).nullable(),
  hashtags: z.array(z.string()).nullable(),
  limit_count: z.number().int().positive().default(10),
  offset_count: z.number().int().nonnegative().default(0),
});

export type UpdateFeedInput = z.infer<typeof UpdateFeedSchema>;
export type ReportFeedInput = z.infer<typeof ReportFeedSchema>;
export type GetAllFeedsInput = z.infer<typeof GetAllFeedsSchema>;
export type GetMyFeedsInput = z.infer<typeof GetMyFeedsSchema>;
export type GetOthersFeedsInput = z.infer<typeof GetOthersFeedsSchema>;
export type GetSearchedFeedsInput = z.infer<typeof GetSearchedFeedsSchema>;

export type CreateFeedInput = z.infer<typeof CreateFeedModel>;
