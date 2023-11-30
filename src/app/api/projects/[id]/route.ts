import { projectType } from "@/types/projects";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET( context: { params: { id: string } } ) {
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

export async function PATCH( request:Request, context: { params: { id: string } } ) {
    const { title, description, content, images, siteUrl, sourceUrl, techStack }:projectType = await request.json();
    const id = context.params.id;
    try {
        if(title) {
            const projectCheck = await prisma.projects.findUnique({
                where: {
                    title
                }
            })
            if (projectCheck) return NextResponse.json({msg: "Project title is already exists!"})
        }

        await prisma.projectTech.deleteMany({
            where: {
                projectId: id
            }
        })

        const project = await prisma.projects.update({
            where: {
                id
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
                                id: tech.id
                            }
                        }
                    }))
                }
            }
        })
        return NextResponse.json(project)
    } catch (error) {
        return console.log(error)
    }
}