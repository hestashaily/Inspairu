"use server";

import { getVerifiedUser } from "../utils/fetchVeifiedUser";
import engagementService from "../models/engagementmodel";
import {
  AddReactionSchema,
  RemoveReactionSchema,
  AddViewSchema,
  RemoveViewSchema,
  GetAllViewsSchema,
  GetAllReactionsSchema,
  AddReactionInput,
  RemoveReactionInput,
  AddViewInput,
  RemoveViewInput,
  GetAllViewsInput,
  GetAllReactionsInput,
} from "../schema/engagementSchema";
import { handleError } from "../utils/handleError";

export async function addReaction(input: AddReactionInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id } = AddReactionSchema.parse(input);
    await engagementService.addReaction(BigInt(user.user_id), feed_id);

    return { success: true, message: "Reaction added successfully" };
  } catch (error) {
    handleError(error);
  }
}

export async function removeReaction(input: RemoveReactionInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id } = RemoveReactionSchema.parse(input);
    await engagementService.removeReaction(BigInt(user.user_id), feed_id);
    return { success: true, message: "Reaction removed successfully" };
  } catch (error) {
    handleError(error);
  }
}

export async function addView(input: AddViewInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id } = AddViewSchema.parse(input);
    return await engagementService.addView(BigInt(user.user_id), feed_id);
  } catch (error) {
    handleError(error);
  }
}

export async function removeView(input: RemoveViewInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id } = RemoveViewSchema.parse(input);
    return await engagementService.removeView(BigInt(user.user_id), feed_id);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllViews(input: GetAllViewsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id, page, limit } = GetAllViewsSchema.parse(input);
    return await engagementService.getAllViews(feed_id, page, limit);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllReactions(input: GetAllReactionsInput) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");

    const { feed_id, page, limit } = GetAllReactionsSchema.parse(input);
    return await engagementService.getAllReactions(feed_id, page, limit);
  } catch (error) {
    handleError(error);
  }
}
