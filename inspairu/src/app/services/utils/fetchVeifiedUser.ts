"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function getVerifiedUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("No session found");
    }

    return session.user;
  } catch (error) {
    console.error(error);
  }
}
