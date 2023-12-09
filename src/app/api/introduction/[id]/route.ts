import { introduction } from "@/types/introduction"
import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function PATCH(request:Request, context: {params: { id: string}}) {
    const { title, information, description }:introduction = await request.json()
    const id = context.params.id
    try {
        const check = await prisma.introduction.findUnique({
            where: {
                id
            }
        })
        if (!check) return NextResponse.json("Data Not Found")
        const response = await prisma.introduction.update({
            where: {
                id
            },
            data: {
                title,
                information,
                description
            }
        })
        return NextResponse.json({response, msg: "Data Updated Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}