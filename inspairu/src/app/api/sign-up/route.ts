import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, userName, userEmail, password } = body;

    if (!firstName || !lastName || !userName || !userEmail || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const authKey = jwt.sign(
      { email: userEmail, userName },
      process.env.JWT_SECRET || "your-secret", // store this in .env
      { expiresIn: "24h" }
    );

    const uuhid = uuidv4();
    // Save to the database
    const newUser = await prisma.users.create({
      data: {
        uuhid: uuhid,
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: userEmail,
        password: hashedPassword,
        auth_key: authKey,
      },
    });
    return NextResponse.json(
      { message: "User signed up successfully", user: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sign-up route:", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
