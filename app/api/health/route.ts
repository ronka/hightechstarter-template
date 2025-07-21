import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  // Get authenticated user
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "HighTechStarter API is running",
  });
}
