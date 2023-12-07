import { technology } from "@/types/technology"
import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const { tech, images }:technology = await request.json()
    try {
        await prisma.technology.create({
            data: {
                tech,
                images
            }
        })
        return NextResponse.json({message: 'Technology created'})
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function GET() {
    try {
        const technologies = await prisma.technology.findMany()
        return NextResponse.json(technologies)
    } catch (error) {
        return NextResponse.json(error)
    }    
}