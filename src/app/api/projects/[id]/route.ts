import { projectType } from "@/types/projects";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request:Request, context: { params: { id: string } }) {
    const id = context.params.id;
    try {
        const project = await prisma.projects.findUnique({
            where: {
                id,
            },
            include: {
                techstack: true
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
    const {
        title,
        description,
        content,
        images,
        siteUrl,
        sourceUrl,
        techStack,
    }: projectType = await request.json();
    const id = context.params.id;
    try {
        if (title) {
            const projectCheck = await prisma.projects.findUnique({
                where: {
                    title,
                },
            });
            if (projectCheck)
                return NextResponse.json({ msg: "Project title is already exists!" });
        }

        const techStackSet = new Set(techStack?.map((tech) => tech.id));
        if (techStack && techStack.length !== techStackSet.size) {
            return NextResponse.json({ msg: "Duplicate values in techStack" });
        }

        await prisma.projectTech.deleteMany({
            where: {
                projectId: id,
            },
        });

        const project = await prisma.projects.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                content,
                images,
                siteUrl,
                sourceUrl,
                techstack: {
                    create: techStack?.map((tech) => ({
                        tech: {
                            connect: {
                                id: tech.id,
                            },
                        },
                    })),
                },
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
        const projectCheck = await prisma.projects.findUnique({
            where: {
                id,
            },
        });
        if (!projectCheck) return NextResponse.json({ msg: "Project not found!" });
        await prisma.projectTech.deleteMany({
            where: {
                projectId: id,
            },
        });
        await prisma.projects.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ msg: "Project deleted successfully" });
    } catch (error) {
        return NextResponse.json({ msg: "Error updating Project", error });
    }
}
