import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const addComment = async (
  userId: bigint,
  feedId: bigint,
  commentText: string
) => {
  return prisma.$transaction(async (tx) => {
    const newComment = await tx.comments.create({
      data: {
        feed_id: feedId,
        comment_by: userId,
        comment: commentText,
      },
    });

    await tx.feeds.update({
      where: { id: feedId },
      data: { total_comments_count: { increment: 1 } },
    });

    const userDetails = await tx.users.findUnique({
      where: { user_id: userId },
    });

    return {
      id: newComment.comment_id,
      feed_id: newComment.feed_id,
      comment: newComment.comment,
      comment_by: newComment.comment_by,
      total_reaction: newComment.total_reaction,
      total_reply: newComment.total_reply,
      created_datetime: newComment.created_datetime,
      user_id: userDetails?.user_id || "",
      name: `${userDetails?.first_name || ""} ${
        userDetails?.last_name || ""
      }`.trim(),
      profile_pic: userDetails?.profile_pic || "",
      is_reacted: 0,
    };
  });
};

export const addCommentReaction = async (userId: bigint, commentId: bigint) => {
  return prisma.$transaction(async (tx) => {
    const existingReaction = await tx.comment_reaction.findFirst({
      where: {
        reacted_by: userId,
        comment_id: commentId,
      },
    });
    if (existingReaction) return { success: true };

    await tx.comment_reaction.create({
      data: {
        reacted_by: userId,
        comment_id: commentId,
      },
    });

    await tx.comments.update({
      where: { comment_id: commentId },
      data: { total_reaction: { increment: 1 } },
    });

    return { success: true };
  });
};

export const removeCommentReaction = async (
  userId: bigint,
  commentId: bigint
) => {
  return prisma.$transaction(async (tx) => {
    await tx.comment_reaction.delete({
      where: {
        comment_id_reacted_by: {
          comment_id: commentId,
          reacted_by: userId,
        },
      },
    });

    await tx.comments.update({
      where: { comment_id: commentId },
      data: { total_reaction: { decrement: 1 } },
    });

    return { success: true };
  });
};

export const addCommentReply = async (
  userId: bigint,
  commentId: bigint,
  commentText: string
) => {
  return prisma.$transaction(async (tx) => {
    const newCommentReply = await tx.comment_reply.create({
      data: {
        comment_id: commentId,
        reply_by: userId,
        reply: commentText,
      },
    });

    await tx.comments.update({
      where: { comment_id: commentId },
      data: { total_reply: { increment: 1 } },
    });

    const userDetails = await tx.users.findUnique({
      where: { user_id: userId },
    });

    return {
      id: newCommentReply.reply_id,
      comment_id: newCommentReply.comment_id,
      reply: newCommentReply.reply,
      reply_by: newCommentReply.reply_by,
      total_reaction: newCommentReply.total_reaction,
      created_datetime: newCommentReply.created_datetime,
      user_id: userDetails?.user_id || "",
      name: `${userDetails?.first_name || ""} ${
        userDetails?.last_name || ""
      }`.trim(),
      profile_pic: userDetails?.profile_pic || "",
      is_reacted: 0,
    };
  });
};

export const addCommentReplyReaction = async (
  userId: bigint,
  replyId: bigint
) => {
  return prisma.$transaction(async (tx) => {
    const existingReaction = await tx.comment_reply_reaction.findFirst({
      where: {
        reacted_by: userId,
        reply_id: replyId,
      },
    });
    if (existingReaction) return { success: true };

    await tx.comment_reply_reaction.create({
      data: {
        reacted_by: userId,
        reply_id: replyId,
      },
    });

    await tx.comment_reply.update({
      where: { reply_id: replyId },
      data: { total_reaction: { increment: 1 } },
    });

    return { success: true };
  });
};

export const removeCommentReplyReaction = async (
  userId: bigint,
  replyId: bigint
) => {
  return prisma.$transaction(async (tx) => {
    await tx.comment_reply_reaction.delete({
      where: {
        reply_id_reacted_by: {
          reply_id: replyId,
          reacted_by: userId,
        },
      },
    });

    await tx.comment_reply.update({
      where: { reply_id: replyId },
      data: { total_reaction: { decrement: 1 } },
    });

    return { success: true };
  });
};

export const deleteComment = async (userId: bigint, commentId: bigint) => {
  return prisma.$transaction(async (tx) => {
    const comment = await tx.comments.findUnique({
      where: {
        comment_id: commentId,
        comment_by: userId,
      },
    });

    if (!comment)
      throw new Error("Comment not found or unauthorized to delete");

    await tx.feeds.update({
      where: { id: comment.feed_id! },
      data: { total_comments_count: { decrement: 1 } },
    });

    return tx.comments.delete({
      where: {
        comment_id: commentId,
        comment_by: userId,
      },
    });
  });
};

export const deleteCommentReply = async (userId: bigint, replyId: bigint) => {
  return prisma.$transaction(async (tx) => {
    const reply = await tx.comment_reply.findUnique({
      where: {
        reply_id: replyId,
        reply_by: userId,
      },
    });

    if (!reply) throw new Error("Reply not found or unauthorized to delete");

    await tx.comments.update({
      where: { comment_id: reply.comment_id! },
      data: { total_reply: { decrement: 1 } },
    });

    return tx.comment_reply.delete({
      where: {
        reply_id: replyId,
        reply_by: userId,
      },
    });
  });
};

export const blockComment = async (userId: bigint, commentId: bigint) => {
  return prisma.blocked_comments.create({
    data: {
      comment_id: commentId,
      user_id: userId,
    },
  });
};

export const blockReply = async (userId: bigint, replyId: bigint) => {
  return prisma.blocked_replies.create({
    data: {
      reply_id: replyId,
      user_id: userId,
    },
  });
};

export const fetchComments = async (
  userId: bigint,
  feedId: bigint,
  pageNum: number,
  limit: number
) => {
  const [rows]: any = await pool.query("CALL get_feed_comments(?, ?, ?, ?)", [
    userId,
    feedId,
    pageNum,
    limit,
  ]);
  return rows?.[0];
};

export const fetchCommentReplies = async (
  userId: bigint,
  commentId: bigint,
  pageNum: number,
  limit: number
) => {
  const [rows]: any = await pool.query("CALL get_comment_replies(?, ?, ?, ?)", [
    userId,
    commentId,
    pageNum,
    limit,
  ]);
  return rows?.[0];
};
