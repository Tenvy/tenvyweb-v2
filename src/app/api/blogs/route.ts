import { BlogItemProps } from "@/types/blog";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await prisma.blogs.findMany({
            include: {
                publisher: {
                    select: {
                        nickname: true,
                        profileImage: true
                    }
                }
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: Request) {
    const { title, description, content, images, usersUuid, timeRead, tags }:BlogItemProps = await request.json()
    try {
        const project = await prisma.blogs.findUnique({
            where: {
                title
            }
        })
        if (project) return NextResponse.json({msg: "Project sudah ada"})

        const response = await prisma.blogs.create({
            data: {
                title,
                description,
                content,
                images,
                usersUuid,
                views: 0,
                timeRead,
                tags
            }
        })

        return NextResponse.json({response, msg: "Data Created Successfully"})
    } catch (error) {
        console.log(error)
    }
}