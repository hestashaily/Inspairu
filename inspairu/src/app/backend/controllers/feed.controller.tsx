"use server";

import {
  CreateFeedInput,
  CreateFeedModel,
} from "@/app/backend/model/feed.model";
import { getVerifiedUser } from "@/app/services/utils/fetchVeifiedUser";
import { createFeedService } from "@/app/backend/services/feed.service";

export async function createFeedAction(formData: unknown) {
  // 1) validate
  const parsed = CreateFeedModel.safeParse(formData);
  if (!parsed.success) {
    const issues = parsed.error.issues.map(
      (i) => `${i.path.join(".")}: ${i.message}`
    );
    throw new Error("Validation failed\n" + issues.join("\n"));
  }

  // 2) auth
  const user = await getVerifiedUser();
  if (!user) throw new Error("Not authenticated");

  // 3) DB write
  return await createFeedService(
    parsed.data as CreateFeedInput,
    BigInt(user.user_id)
  );
}
