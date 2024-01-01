import { getStory } from '@/services/story'

const Story = async () => {
  const data = await getStory()

  return (
    <section
      className='space-y-4 leading-[1.8] md:leading-loose text-neutral-300'
      dangerouslySetInnerHTML={{ __html: data.story }}
    />
  );
};

export default Story;