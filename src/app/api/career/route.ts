import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const { company, images, location, position, startDate, endDate } = await request.json()

    try {
        const check = await prisma.career.findUnique({
            where: {
                company
            }
        })
        if(check) return NextResponse.json({msg: "Data Already Exists!"})
        const response = await prisma.career.create({
            data: {
                company,
                images,
                location,
                position,
                startDate,
                endDate
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: "Something went wrong.", error})
    }
}

export async function GET() {
    try {
        const response = await prisma.career.findMany()
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: 'Something Went Wrong', error})
    }
}