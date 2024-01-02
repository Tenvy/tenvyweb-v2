import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, context: {params: { id: string}}) {
    const id = context.params.id
    try {
        const check = await prisma.about.findUnique({
            where: {
                id
            }
        })
        if (!check) return NextResponse.json("Data Not Found")
        const response = await prisma.about.delete({
            where: {
                id
            }
        })
        return NextResponse.json({response, msg: "Data Deleted Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}