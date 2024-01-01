import { EducationProps } from "@/types/education";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { school, major, images, location, degree, startDate, endDate }:EducationProps = await request.json()

    try {
        const Check = await prisma.education.findUnique({
            where: {
                school
            }
        })
        if(Check) return NextResponse.json({msg:"School Already Exists!"})
        const response = await prisma.education.create({
            data: {
                school,
                major,
                images,
                location,
                degree,
                startDate,
                endDate
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: "Something went wrong.",error})
    }
}

export async function GET() {
    try {
        const response = await prisma.education.findMany()
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: "Something went wrong.", error})
    }
}
