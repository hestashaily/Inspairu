import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Missing email or name" },
        { status: 400 }
      );
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Hello ${name}, your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    const otpData = await prisma.email_otp_verification.create({
      data: {
        email_id: email,
        OTP: otp,
      },
    });

    if (!otpData) {
      return NextResponse.json(
        { error: "Failed to save OTP" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, otp }); // for dev; remove `otp` in prod
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
