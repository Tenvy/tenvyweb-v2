import { projectTech, technology } from "@prisma/client";

export type projectType = {
    title: string;
    description: string;
    content?: string;
    createdate: string;
    images: string;
    usersUuid: string;
    siteUrl?: string;
    sourceUrl?: string;
    techStack?: technology[];
}

export interface ProjectItemProps {
    id: string;
    title: string;
    description: string;
    content?: string;
    createdate: string;
    images: string;
    usersUuid: string;
    siteUrl?: string;
    sourceUrl?: string;
    techstack?: projectTech[];
  }
  
  export interface ProjectsProps {
    projects: ProjectItemProps[];
  }