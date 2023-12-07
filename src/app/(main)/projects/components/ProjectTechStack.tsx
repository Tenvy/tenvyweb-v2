import React from 'react'
import { getTechnology } from '@/services/technology';
import { technology } from '@/types/technology';
import Image from 'next/image';

interface TechStackProps {
    techstack?: { projectId: string; techId: string }[];
}

const ProjectTechStack: React.FC<TechStackProps> = async ({ techstack }) => {
    const technology = await getTechnology()

    const filteredTech = technology.filter((item: technology) =>
        techstack?.some((tech) => tech.techId === item.id)
    )

    return (
        <>
            {filteredTech?.map((res: technology, key: any) => {
                return (
                    <div key={key}>
                        {res.images && <Image src={res.images} alt={res.tech} width={25} height={25}/>}
                    </div>
                )
            })}
        </>
    )
}

export default ProjectTechStack
