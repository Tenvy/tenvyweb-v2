import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { story } = await request.json()

    try {
        const check = await prisma.about.findUnique({
            where: {
                story
            }
        })

        if (check) {
            return NextResponse.json({msg: 'Data Already Exists'})
        }

        const response = await prisma.about.create({
            data: {
                story,
                isSelected: false,
            }
        })
        return NextResponse.json({msg: 'Data Created', response})
    } catch (error) {
        return NextResponse.json({msg: 'Something Went Wrong', error})
    }
}

export async function GET() {
    try {
        const response = await prisma.about.findFirst({
            where: {
                isSelected: true
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({msg: 'Something Went Wrong', error})
    }
}