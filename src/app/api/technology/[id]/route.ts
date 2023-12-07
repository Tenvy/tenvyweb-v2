import { technology } from "@/types/technology";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request:Request, context: { params: { id: string; } }) {
    const { tech, images }:technology = await request.json();
    const id = context.params.id;
    
    try {
        const technology = await prisma.technology.findUnique({
            where: {
                id
            }
        })
        if(!technology) return NextResponse.json({msg: "Technology not found!"})
        
        await prisma.technology.update({
            where: {
                id
            },
            data: {
                tech,
                images
            }
        })
        return NextResponse.json({msg: "Technology updated!"})
    } catch (error) {
        return NextResponse.json({msg: "Something went wrong!", error})
    }
}

export async function DELETE(request:Request, context: { params: { id: string; } }) {
    const id = context.params.id;
    try {
        const technology = await prisma.technology.findUnique({
            where: {
                id
            }
        })
        if(!technology) return NextResponse.json({msg: "Technology not found!"})
        
        await prisma.projectTech.deleteMany({
            where: {
                techId: id
            }
        })
        
        await prisma.technology.delete({
            where: {
                id
            }
        })
        
        return NextResponse.json({msg: "Technology deleted!"})
    } catch (error) {
        return NextResponse.json({msg: "Something went wrong!", error})
    }
}