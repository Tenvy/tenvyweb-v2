import Breakline from '@/components/elements/Breakline';
import PageHeading from '@/components/elements/PageHeading';

import CareerList from './components/careerList';
import EducationList from './components/educationList';
import Resume from './components/resume';
import Skills from './components/skills';
import Story from './components/story';
import { getTechnology } from '@/services/technology';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = 'A short story of me, not important but seem better than nothing.';

const About = async () => {
  const data = await getTechnology()

  return (
    <>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Story />
      <Resume />
      <Breakline className='my-8' />
      <Skills tech={data}/>
      <Breakline className='my-8' />
      <CareerList />
      <Breakline className='my-8' />
      <EducationList />
    </>
  );
};

export default About;