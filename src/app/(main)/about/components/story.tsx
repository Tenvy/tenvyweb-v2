import EmptyState from '@/components/elements/EmptyState';
import { getStory } from '@/services/story'

const Story = async () => {
  const data = await getStory()

  if(!data) return (
    <EmptyState message='No Story Here'/>
  )

  return (
    <section
      className='space-y-4 leading-[1.8] md:leading-loose text-neutral-300'
      dangerouslySetInnerHTML={{ __html: data?.story }}
    />
  );
};

export default Story;