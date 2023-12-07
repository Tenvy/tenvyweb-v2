import PageHeading from '@/components/elements/PageHeading';

import Projects from './components/Projects';
import { getProjects } from '@/services/projects';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const Page = async () => {
  const projects = await getProjects()
  
  return (
    <>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects}
        />
    </>
  );
};

export default Page;