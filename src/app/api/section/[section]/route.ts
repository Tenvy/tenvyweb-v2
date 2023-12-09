import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET(request:Request, context: {params: {section: string}}) {
    const section = context.params.section
    try {
        const response = await prisma.selectedHomeSection.findUnique({
            where: { 
                section
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({error})
    }
}