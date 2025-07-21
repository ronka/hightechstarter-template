import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../db";
import { users } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";

// Validation schema for creating/updating a user
const userSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
});

// GET /api/users/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Add authentication
  const { userId: authUserId } = await auth();
  if (!authUserId) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }
  try {
    const { id: userId } = await params;
    const userData = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!userData[0]) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: userData[0],
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// POST /api/users/[id] - Create a new user
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Add authentication
  const { userId: authUserId } = await auth();
  if (!authUserId) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }
  const { id: userId } = await params;
  if (authUserId !== userId) {
    return NextResponse.json(
      { error: "Forbidden: You can only create your own user record" },
      { status: 403 }
    );
  }
  try {
    const body = await request.json();

    // Check if user already exists
    const existingUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (existingUser[0]) {
      return NextResponse.json(
        { success: false, error: "User already exists" },
        { status: 409 }
      );
    }

    // Validate input
    const validatedData = userSchema.parse(body);

    // Create new user
    const [newUser] = await db
      .insert(users)
      .values({
        id: userId,
        name: validatedData.name,
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation error" },
        { status: 400 }
      );
    }

    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}

// PUT /api/users/[id] - Update existing user or create if doesn't exist
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Add authentication
  const { userId: authUserId } = await auth();
  if (!authUserId) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }
  const { id: userId } = await params;
  if (authUserId !== userId) {
    return NextResponse.json(
      { error: "Forbidden: You can only update your own user record" },
      { status: 403 }
    );
  }
  try {
    const body = await request.json();

    // Validate input
    const validatedData = userSchema.parse(body);

    // Check if user exists
    const existingUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    let result;

    if (existingUser[0]) {
      // Update existing user
      const [updatedUser] = await db
        .update(users)
        .set({
          name: validatedData.name,
          updatedAt: new Date(),
        })
        .where(eq(users.id, userId))
        .returning();

      result = updatedUser;
    } else {
      // Create new user
      const [newUser] = await db
        .insert(users)
        .values({
          id: userId,
          name: validatedData.name,
        })
        .returning();

      result = newUser;
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation error" },
        { status: 400 }
      );
    }

    console.error("Error updating/creating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update/create user" },
      { status: 500 }
    );
  }
}
