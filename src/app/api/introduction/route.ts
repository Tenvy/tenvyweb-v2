import prisma from "@/utils/db";
import { NextResponse } from "next/server";
import { introduction } from "@/types/introduction";
import { Check, Create } from "@/services/selectedSection";

export async function GET() {
    try {
        const response = await prisma.introduction.findFirst()
        if (!response) return NextResponse.json({msg: "Introduction Not Found"})
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(error)
    }    
}

export async function POST(request: Request) {
    const { title, information, description }:introduction = await request.json()
    const url = request.url
    try {
        const response = await prisma.introduction.create({
            data: {
                title,
                information,
                description
            }
        })
        const sectionCheck = await Check(url)
        if (!sectionCheck) {
            await Create(response.id, url)
        }

        return NextResponse.json({response, msg: "Introduction Data Created Successfully"})
    } catch (error) {
        return NextResponse.json(error)
    }
}