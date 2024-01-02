import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, context: {params: { school: string}}) {
    const school = context.params.school
    try {
        const check = await prisma.education.findUnique({
            where: {
                school
            }
        })
        if (!check) return NextResponse.json("Data Not Found")
        const response = await prisma.education.delete({
            where: {
                school
            }
        })
        return NextResponse.json({response, msg: "Data Deleted Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}