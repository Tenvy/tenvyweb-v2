import EmptyState from '@/components/elements/EmptyState';
import { ProjectsProps } from '@/types/projects';

import ProjectCard from './ProjectCard';

interface ProjectsComponentProps {
  projects: ProjectsProps['projects'];
}

const Projects = ({ projects }: ProjectsComponentProps) => {

  if (projects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
      <div className='grid sm:grid-cols-2 gap-5 pt-2 px-1'>
        {projects.map((project, index) => (
            <ProjectCard {...project} key={index}/>
        ))}
      </div>
  );
};

export default Projects;