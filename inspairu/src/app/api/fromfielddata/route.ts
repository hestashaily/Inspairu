import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
  try {
    // Fetch AI tools from the database
    const aiTools = await prisma.ai_tool_mstr.findMany();
    return NextResponse.json(aiTools);

  } catch (error) {
    console.error("Error fetching AI tools:", error);
    return NextResponse.json(
      { error: "Error fetching AI tools" },
      { status: 500 }
    );
  }
}
