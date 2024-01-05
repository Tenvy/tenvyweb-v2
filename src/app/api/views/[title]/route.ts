import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function PATCH(request:Request,  context: { params: { title: string } }) {
    const title = context.params.title

    try {
        const check = await prisma.blogs.findUnique({
            where: {
                title
            }
        })
        if (!check) return NextResponse.json({msg: "Blogs Not Exists!"})
        const response = await prisma.blogs.update({
            where: {
                title
            },
            data: {
                views: {
                    increment: 1
                }
            },
            select: { views: true }
        });
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: 'Failed to update views count.', error})
    }
}