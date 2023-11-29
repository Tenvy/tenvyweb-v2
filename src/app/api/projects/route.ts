import prisma from "@/utils/db"
import { projectType } from "@/types/projects"

export async function POST(request: Request) {
    const { title, description, content, createDate, images, uuid, siteUrl, sourceUrl, techStack }:projectType = await request.json()

    try {
        
    } catch (error) {
        
    }
}