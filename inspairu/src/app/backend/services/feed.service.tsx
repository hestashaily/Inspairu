import { PrismaClient, feeds_feed_type } from "@prisma/client";
import { CreateFeedModel } from "../model/feed.model";
import { z } from "zod";

const prisma = new PrismaClient();

export const createFeedService = async (
  input: z.infer<typeof CreateFeedModel>,
  userId: bigint
) => {
  const { caption, description, prompt, feedType, aiTools, hashtags } = input;
  console.log("thia is hastage value", hashtags);
  return await prisma.$transaction(async (tx) => {
    const feed = await tx.feeds.create({
      data: {
        user_id: userId,
        caption,
        description,
        prompt,
        feed_type: feedType as feeds_feed_type | undefined,
        feed_uuid: crypto.randomUUID(),
      },
    });

    // Handle AI Tools
    if (aiTools && aiTools.length > 0) {
      await tx.feed_ai_tool.createMany({
        data: aiTools.map((tool) => ({
          feed_id: Number(feed.id), // assuming feed.id is bigint
          ai_tool_id: tool.id,
        })),
      });
    }

    // Handle Hashtags
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
