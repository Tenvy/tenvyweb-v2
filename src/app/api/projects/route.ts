import prisma from "@/utils/db"
import { projectType } from "@/types/projects"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const projects = await prisma.projects.findMany({
            include: {
                techstack: true
            }
        })
        return NextResponse.json(projects)
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: Request) {
    const { title, description, content, images, usersUuid, siteUrl, sourceUrl, techStack }:projectType = await request.json()
    try {
        const project = await prisma.projects.findUnique({
            where: {
                title
            }
        })
        if (project) return NextResponse.json({msg: "Project sudah ada"})

        const techStackSet = new Set(techStack?.map((tech) => tech.id));
        if (techStack && techStack.length !== techStackSet.size) {
            return NextResponse.json({ msg: "Duplicate values in techStack" });
        }

        const created = await prisma.projects.create({
            data: {
                title,
                description,
                content,
                images,
                usersUuid,
                siteUrl,
                sourceUrl,
                techstack: {
                    create: techStack?.map(tech => ({
                        tech: {
                            connect: {
                                id: tech.id
                        }
                }}))
                }
            }
        })

        return NextResponse.json({created})
    } catch (error) {
        console.log(error)
    }
}