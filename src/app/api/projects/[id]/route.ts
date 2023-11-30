import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET( request:Request, context: { params: { id: string } }) {
    const id = context.params.id;
    try {
        const project = await prisma.projects.findUnique({
            where: {
                id
            }
        })
        if (!project) return NextResponse.json({msg: "project not found"})
        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json({msg: "failed to get project", error})
    }
}