import BackButton from '@/components/elements/BackButton';
import PageHeading from '@/components/elements/PageHeading';
import ProjectDetail from './components/ProjectDetail';
import { getProjectById } from '@/services/projects';

const ProjectsDetailPage = async ({ params }: { params: { id: string } }) => {
    const project = await getProjectById(params.id)


    const PAGE_TITLE = project?.title;
    const PAGE_DESCRIPTION = project?.description;

    return (
        <>
        {project?.title ? (
        <>
            <BackButton url='/projects' />
            <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            <ProjectDetail {...project} />
        </>
        ): (
            <>
                <BackButton url='/projects'/>
                <PageHeading title='404' description='Whoops, there doesn&apos;t seem to be anything here!'/>
            </>
        )}
        </>
    );
};

export default ProjectsDetailPage;