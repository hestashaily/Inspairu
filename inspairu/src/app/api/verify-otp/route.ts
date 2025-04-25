import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    console.log("Received OTP:", otp);
    console.log("Received email:", email);

    const otpRecord = await prisma.email_otp_verification.findFirst({
      where: {
        email_id: email,
        OTP: otp,
      },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // OTP matched, delete the record
    await prisma.email_otp_verification.delete({
      where: { email_id: otpRecord.email_id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
