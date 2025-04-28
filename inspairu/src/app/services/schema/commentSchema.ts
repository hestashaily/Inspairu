import { z } from "zod";
export const AddCommentSchema = z.object({
  feedId: z.coerce.bigint(),
  commentText: z.string().min(1),
});
export const AddCommentReactionSchema = z.object({
  commentId: z.coerce.bigint(),
});
export const RemoveCommentReactionSchema = z.object({
  commentId: z.coerce.bigint(),
});
export const AddCommentReplySchema = z.object({
  commentId: z.coerce.bigint(),
  commentText: z.string().min(1),
});
export const AddCommentReplyReactionSchema = z.object({
  replyId: z.coerce.bigint(),
});
export const RemoveCommentReplyReactionSchema = z.object({
  replyId: z.coerce.bigint(),
});
export const FetchCommentsSchema = z.object({
  feedId: z.coerce.bigint(),
  pageNum: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
});
export const FetchCommentRepliesSchema = z.object({
  commentId: z.coerce.bigint(),
  pageNum: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
});
export const DeleteCommentSchema = z.object({
  commentId: z.coerce.bigint(),
});
export const DeleteCommentReplySchema = z.object({
  replyId: z.coerce.bigint(),
});
export const BlockCommentSchema = z.object({
  commentId: z.coerce.bigint(),
});
export const BlockReplySchema = z.object({
  replyId: z.coerce.bigint(),
});
