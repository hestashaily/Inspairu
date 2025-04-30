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
  prompt: z.string().default("").optional(),
  hashtags: z.array(z.string()).default([]),
  description: z.string().optional().default(""),
  genratedText: z.string().optional().default(""),
});

export const CreateFeedModel = BasicFeedSchemas.extend({
  feedType: z
    .enum(Object.values(feeds_feed_type) as [string, ...string[]])
    .optional(),
});

export type CreateFeedInput = z.infer<typeof CreateFeedModel>;
