import { z } from "zod";

const EngagementBaseSchema = z.object({
  feed_id: z.union([z.bigint(), z.number(), z.string()]).transform(BigInt),
});

const PaginationSchema = z.object({
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
});

export const AddReactionSchema = EngagementBaseSchema;
export const RemoveReactionSchema = EngagementBaseSchema;
export const AddViewSchema = EngagementBaseSchema;
export const RemoveViewSchema = EngagementBaseSchema;
export const GetAllViewsSchema = EngagementBaseSchema.merge(PaginationSchema);
export const GetAllReactionsSchema =
  EngagementBaseSchema.merge(PaginationSchema);

export type AddReactionInput = z.infer<typeof AddReactionSchema>;
export type RemoveReactionInput = z.infer<typeof RemoveReactionSchema>;
export type AddViewInput = z.infer<typeof AddViewSchema>;
export type RemoveViewInput = z.infer<typeof RemoveViewSchema>;
export type GetAllViewsInput = z.infer<typeof GetAllViewsSchema>;
export type GetAllReactionsInput = z.infer<typeof GetAllReactionsSchema>;
