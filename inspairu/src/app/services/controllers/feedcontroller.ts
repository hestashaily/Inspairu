import { getVerifiedUser } from "../utils/fetchVeifiedUser";
import feedService from "../models/feedmodel";
import {
  CreateFeedSchema,
  UpdateFeedSchema,
  ReportFeedSchema,
  GetAllFeedsSchema,
  GetMyFeedsSchema,
  FeedUuidSchema,
  GetOthersFeedsSchema,
  GetSearchedFeedsSchema,
  CreateFeedInput,
  UpdateFeedInput,
  ReportFeedInput,
  GetAllFeedsInput,
  GetMyFeedsInput,
  GetOthersFeedsInput,
  GetSearchedFeedsInput,
} from "../schema/feedSchema";
import { handleError } from "../utils/handleError";

export async function createFeed(input: CreateFeedInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const validatedInput = CreateFeedSchema.parse(input);
    return await feedService.createFeed(BigInt(user.user_id), validatedInput);
  } catch (error) {
    handleError(error);
  }
}

export async function updateFeed(
  id: bigint | number | string,
  input: UpdateFeedInput
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const validatedInput = UpdateFeedSchema.parse(input);
    return await feedService.updateFeed(
      BigInt(id),
      BigInt(user.user_id),
      validatedInput
    );
  } catch (error) {
    handleError(error);
  }
}

export async function deleteFeed(id: bigint | number | string) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    return await feedService.deleteFeed(BigInt(id), BigInt(user.user_id));
  } catch (error) {
    handleError(error);
  }
}

export async function reportFeed(input: ReportFeedInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feedId, message } = ReportFeedSchema.parse(input);
    return await feedService.reportFeed({
      feedId,
      blockedBy: BigInt(user.user_id),
      message,
    });
  } catch (error) {
    handleError(error);
  }
}

export async function getAllFeeds(input: GetAllFeedsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { limit_count, offset_count } = GetAllFeedsSchema.parse(input);
    return await feedService.getAllFeeds(
      BigInt(user.user_id),
      limit_count,
      offset_count
    );
  } catch (error) {
    handleError(error);
  }
}

export async function getMyFeeds(input: GetMyFeedsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { q, aiTools, hashtags, limit_count, offset_count } =
      GetMyFeedsSchema.parse(input);
    return await feedService.getMyFeeds(
      BigInt(user.user_id),
      q,
      aiTools,
      hashtags,
      limit_count,
      offset_count
    );
  } catch (error) {
    handleError(error);
  }
}

export async function getFeedDetailsByUuid(feedUuid: string) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const validatedUuid = FeedUuidSchema.parse(feedUuid);
    return await feedService.getFeedDetailsByUuid(
      validatedUuid,
      BigInt(user.user_id)
    );
  } catch (error) {
    handleError(error);
  }
}

export async function getOthersFeeds(input: GetOthersFeedsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { other_uid, limit_count, offset_count } =
      GetOthersFeedsSchema.parse(input);
    return await feedService.getOthersFeeds(
      BigInt(user.user_id),
      other_uid,
      limit_count,
      offset_count
    );
  } catch (error) {
    handleError(error);
  }
}

export async function getSearchedFeeds(input: GetSearchedFeedsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { q, aiTools, hashtags, limit_count, offset_count } =
      GetSearchedFeedsSchema.parse(input);
    return await feedService.getSearchedFeeds(
      BigInt(user.user_id),
      q,
      aiTools,
      hashtags,
      limit_count,
      offset_count
    );
  } catch (error) {
    handleError(error);
  }
}

export async function fetchAiTools() {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    return await feedService.fetchAiTools();
  } catch (error) {
    handleError(error);
  }
}
