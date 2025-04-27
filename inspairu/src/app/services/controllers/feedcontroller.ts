import { feed_media_media_type, feeds_feed_type } from "@prisma/client";
import { getVerifiedUser } from "../utils/fetchVeifiedUser";

export interface CreatefeedInput {
  caption?: string | null;
  description?: string | null;
  prompt?: string | null;
  feedType?: feeds_feed_type;
  generatedText?: string | null;
  hashtags?: string[];
  aiTools?: number[];
  media?: {
    thumbnailUrl: string;
    mediaUrl: string;
    mediaType: feed_media_media_type;
  }[];
}

export async function createFeed(input: CreatefeedInput) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    // Convert user_id from string to number
    return await feedService.createFeed(BigInt(user.user_id), input);
  } catch (error) {
    console.error("Error creating Feed:", error);
    throw new Error("Could not create Feed.");
  }
}

export interface UpdateFeedInput {
  caption?: string | null;
  description?: string | null;
  prompt?: string | null;
  generatedText?: string | null;
  hashtags?: string[];
  aiTools?: number[];
  media?: {
    thumbnailUrl: string;
    mediaUrl: string;
    mediaType: feed_media_media_type;
  }[];
}

export async function updateFeed(id: number | string, input: UpdateFeedInput) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    // Convert user_id from string to number and ensure id is BigInt
    return await feedService.updateFeed(
      BigInt(id),
      BigInt(user.user_id),
      input
    );
  } catch (error) {
    console.error("Error updating Feed:", error);
    throw new Error("Could not update Feed.");
  }
}

export async function deleteFeed(id: number | string) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    // Convert both IDs to BigInt
    return await feedService.deleteFeed(BigInt(id), BigInt(user.user_id));
  } catch (error) {
    console.error("Error deleting Feed:", error);
    throw new Error("Could not delete Feed.");
  }
}

export async function reportFeed(feedId: number | string, message: string) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    return await feedService.reportFeed({
      feedId: BigInt(feedId),
      blockedBy: BigInt(user.user_id),
      message,
    });
  } catch (error) {
    console.error("Error reporting Feed:", error);
    throw new Error("Could not report Feed.");
  }
}

export async function getAllFeeds(limit_count: number, offset_count: number) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    // Convert user_id from string to BigInt
    return await feedService.getAllFeeds(
      BigInt(user.user_id),
      limit_count,
      offset_count
    );
  } catch (error) {
    console.error("Error fetching all Feeds:", error);
    throw new Error("Could not fetch all Feeds.");
  }
}

export async function getMyFeeds(
  q: string | null,
  aiTools: number[] | null,
  hashtags: string[] | null,
  limit_count: number,
  offset_count: number
) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    return await feedService.getMyFeeds(
      BigInt(user.user_id),
      q,
      aiTools,
      hashtags,
      limit_count,
      offset_count
    );
  } catch (error) {
    console.error("Error fetching my Feeds:", error);
    throw new Error("Could not fetch my Feeds.");
  }
}

export async function getFeedDetailsByUuid(feedUuid: string) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    return await feedService.getFeedDetailsByUuid(
      feedUuid,
      BigInt(user.user_id)
    );
  } catch (error) {
    console.error("Error fetching feed details:", error);
    throw new Error("Failed to fetch feed details.");
  }
}

export async function getOthersFeeds(
  other_uid: number | string,
  limit_count: number,
  offset_count: number
) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    return await feedService.getOthersFeeds(
      BigInt(user.user_id),
      BigInt(other_uid),
      limit_count,
      offset_count
    );
  } catch (error) {
    console.error("Error fetching others Feeds:", error);
    throw new Error("Could not fetch others Feeds.");
  }
}

export async function getSearchedFeeds(
  q: string | null,
  aiTools: number[] | null,
  hashtags: string[] | null,
  limit_count: number,
  offset_count: number
) {
  const user = await getVerifiedUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  try {
    return await feedService.getSearchedFeeds(
      BigInt(user.user_id),
      q,
      aiTools,
      hashtags,
      limit_count,
      offset_count
    );
  } catch (error) {
    console.error("Error fetching searched Feeds:", error);
    throw new Error("Could not fetch searched Feeds.");
  }
}
