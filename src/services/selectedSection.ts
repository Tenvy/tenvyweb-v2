import prisma from "@/utils/db";

export async function Check(params: string) {
    const pathname = params.split('/').pop()
    if (pathname === undefined) return null
    const response = await prisma.selectedHomeSection.findUnique({
        where: {
            section: pathname
        }
    })
    return response
}

export async function Create(selectedId: string, section: string) {
    const pathname = section.split('/').pop()
    if (pathname === undefined) return null
    const response = await prisma.selectedHomeSection.create({
        data: {
            selectedId,
            section: pathname
        }
    })
    
    return response
}