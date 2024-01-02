import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, context: {params: { company: string}}) {
    const company = context.params.company
    try {
        const check = await prisma.career.findUnique({
            where: {
                company
            }
        })
        if (!check) return NextResponse.json("Data Not Found")
        const response = await prisma.career.delete({
            where: {
                company
            }
        })
        return NextResponse.json({response, msg: "Data Deleted Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}