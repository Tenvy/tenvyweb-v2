import { BlogItemProps } from "@/types/blog";
import { projectType } from "@/types/projects";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request:Request, context: { params: { id: string } }) {
    const id = context.params.id;
    try {
        const project = await prisma.blogs.findUnique({
            where: {
                id,
            }
        });
        if (!project) return NextResponse.json({ msg: "project not found"});
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ msg: "failed to get project", error });
    }
}

export async function PATCH(
    request: Request,
    context: { params: { id: string } }
) {
    const { title, description, content, images, usersUuid, timeRead, tags }:BlogItemProps = await request.json()
    const id = context.params.id;

    try {
        if (title) {
            const projectCheck = await prisma.blogs.findUnique({
                where: {
                    title,
                },
            });
            if (projectCheck)
                return NextResponse.json({ msg: "Project title is already exists!" });
        }

        const project = await prisma.blogs.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                content,
                images,
                timeRead,
                tags
            },
        });
        return NextResponse.json({ msg: "Project updated successfully", project });
    } catch (error) {
        return NextResponse.json({ msg: "Error updating Project", error });
    }
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } }
) {
    const id = context.params.id;
    try {
        const projectCheck = await prisma.blogs.findUnique({
            where: {
                id,
            },
        });
        if (!projectCheck) return NextResponse.json({ msg: "Project not found!" });
        await prisma.blogs.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ msg: "Project deleted successfully" });
    } catch (error) {
        return NextResponse.json({ msg: "Error updating Project", error });
    }
}
