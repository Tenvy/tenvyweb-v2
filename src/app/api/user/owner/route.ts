import prisma from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_ANON_KEY ?? '');

export const POST = async (request: Request) => {
  const owner = {
    username: process.env.OWNER_USERNAME,
    nickname: process.env.ONWER_NICKNAME,
    password: process.env.OWNER_PASS ?? "",
    email: process.env.OWNER_EMAIL,
  };
  try {
    if (!owner) {
      return NextResponse.json("data must exist");
    }
  
    const ownerCheck = await prisma.users.findFirst({
      where: {
        username: owner.username,
        password: owner.password,
        role: "owner",
      },
    });
  
    if (ownerCheck) {
      return NextResponse.json("Owner already exists!");
    }
  
    const hashPass = await bcrypt.hash(owner.password, 10);

    await prisma.users.create({
      data: {
        username: owner.username!,
        nickname: owner.nickname!,
        password: hashPass,
        email: owner.email!,
        role: "owner",
        profileImage: "https://i.pinimg.com/736x/d0/9b/bd/d09bbd8e98ebaa93996fb4c059d294af.jpg",
      },
    });
  
    return NextResponse.json("SUCCESS");
  } catch (error) {
    return NextResponse.json({msg: "Something Wrong", error})
  }
};

export async function GET(request: Request) {
  try {
    const owner = await prisma.users.findFirst({
      where: {
        role: "owner"
      },
      select: {
        email: true,
        username: true,
        nickname: true,
        profileImage: true
      }
    })
    if(!owner) {
      return NextResponse.json("Owner not exist!")
    }
    return NextResponse.json(owner)
  } catch (error) {
    return NextResponse.json("")
  }
}