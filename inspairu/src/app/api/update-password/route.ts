import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    console.log("Received email:", email);
    console.log("Received password:", password);
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        password: hashedPassword,
      },
    });
    if (!updatedUser) {
      return NextResponse.json(
        { error: "Failed to update password" },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
