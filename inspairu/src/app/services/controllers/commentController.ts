import {
  AddCommentReplyReactionSchema,
  AddCommentReplySchema,
  AddCommentReactionSchema,
  AddCommentSchema,
  BlockCommentSchema,
  BlockReplySchema,
  DeleteCommentReplySchema,
  DeleteCommentSchema,
  FetchCommentRepliesSchema,
  FetchCommentsSchema,
  RemoveCommentReplyReactionSchema,
  RemoveCommentReactionSchema,
} from "../schema/commentSchema";
import { z } from "zod";
import { getVerifiedUser } from "../utils/fetchVeifiedUser";
import * as commentService from "../models/commentmodel";
import { handleError } from "../utils/handleError";

export async function addComment(input: z.infer<typeof AddCommentSchema>) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = AddCommentSchema.parse(input);
    return await commentService.addComment(
      BigInt(user.user_id),
      validatedInput.feedId,
      validatedInput.commentText
    );
  } catch (error) {
    handleError(error);
  }
}

export async function addCommentReaction(
  input: z.infer<typeof AddCommentReactionSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = AddCommentReactionSchema.parse(input);
    return await commentService.addCommentReaction(
      BigInt(user.user_id),
      validatedInput.commentId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function removeCommentReaction(
  input: z.infer<typeof RemoveCommentReactionSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = RemoveCommentReactionSchema.parse(input);
    return await commentService.removeCommentReaction(
      BigInt(user.user_id),
      validatedInput.commentId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function addCommentReply(
  input: z.infer<typeof AddCommentReplySchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = AddCommentReplySchema.parse(input);
    return await commentService.addCommentReply(
      BigInt(user.user_id),
      validatedInput.commentId,
      validatedInput.commentText
    );
  } catch (error) {
    handleError(error);
  }
}

export async function addCommentReplyReaction(
  input: z.infer<typeof AddCommentReplyReactionSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = AddCommentReplyReactionSchema.parse(input);
    return await commentService.addCommentReplyReaction(
      BigInt(user.user_id),
      validatedInput.replyId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function removeCommentReplyReaction(
  input: z.infer<typeof RemoveCommentReplyReactionSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = RemoveCommentReplyReactionSchema.parse(input);
    return await commentService.removeCommentReplyReaction(
      BigInt(user.user_id),
      validatedInput.replyId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function fetchComments(
  input: z.infer<typeof FetchCommentsSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = FetchCommentsSchema.parse(input);
    return await commentService.fetchComments(
      BigInt(user.user_id),
      validatedInput.feedId,
      validatedInput.pageNum,
      validatedInput.limit
    );
  } catch (error) {
    handleError(error);
  }
}

export async function fetchCommentReplies(
  input: z.infer<typeof FetchCommentRepliesSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = FetchCommentRepliesSchema.parse(input);
    return await commentService.fetchCommentReplies(
      BigInt(user.user_id),
      validatedInput.commentId,
      validatedInput.pageNum,
      validatedInput.limit
    );
  } catch (error) {
    handleError(error);
  }
}

export async function deleteComment(
  input: z.infer<typeof DeleteCommentSchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = DeleteCommentSchema.parse(input);
    return await commentService.deleteComment(
      BigInt(user.user_id),
      validatedInput.commentId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function deleteCommentReply(
  input: z.infer<typeof DeleteCommentReplySchema>
) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = DeleteCommentReplySchema.parse(input);
    return await commentService.deleteCommentReply(
      BigInt(user.user_id),
      validatedInput.replyId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function blockComment(input: z.infer<typeof BlockCommentSchema>) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = BlockCommentSchema.parse(input);
    return await commentService.blockComment(
      BigInt(user.user_id),
      validatedInput.commentId
    );
  } catch (error) {
    handleError(error);
  }
}

export async function blockReply(input: z.infer<typeof BlockReplySchema>) {
  try {
    const user = await getVerifiedUser();
    if (!user) throw new Error("Not authenticated");
    const validatedInput = BlockReplySchema.parse(input);
    return await commentService.blockReply(
      BigInt(user.user_id),
      validatedInput.replyId
    );
  } catch (error) {
    handleError(error);
  }
}
