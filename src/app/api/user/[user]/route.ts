import { NextResponse } from "next/server"
import prisma from "@/utils/db"

export async function GET(request: Request, context: { params: { user: string } }) {
  const username = context.params.user
  try {
    const user = await prisma.users.findUnique({
      where: {
        username
      },
      select: {
        uuid: true,
        username: true,
        email: true,
        profileImage: true
      }
    });

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json("Error retrieving user", { status: 500 });
  }
}

