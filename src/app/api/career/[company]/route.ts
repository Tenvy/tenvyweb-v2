import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET(request:Request, context: {params: { company: string}}) {
    const company = context.params.company
    try {
        const response = await prisma.career.findUnique({
            where: {
                company
            }
        })
        if (!response) return NextResponse.json("Data Not Found")
        return NextResponse.json({response, msg: "Data Updated Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function PATCH(request:Request, context: {params: { company: string}}) {
    const { images, location, position, startDate, endDate } = await request.json()

    const company = context.params.company
    try {
        const check = await prisma.career.findUnique({
            where: {
                company
            }
        })
        if (!check) return NextResponse.json("Data Not Found")
        const response = await prisma.career.update({
            where: {
                company
            },
            data: {
                images,
                location,
                position,
                startDate,
                endDate
            }
        })
        return NextResponse.json({response, msg: "Data Updated Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}


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