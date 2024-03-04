import EmptyState from "@/components/elements/EmptyState";
import { getInroductionById } from "@/services/introduction";
import { getSelectedIdBySection } from "@/services/selectedSection"


interface production {
  id: string;
  title: string;
  information: string[];
  description: string;
}

interface selectedSection {
  section: string;
  selectedId: string;
}
const Introduction = async () => {
  const id: selectedSection = await getSelectedIdBySection("introduction");
  const data: production = await getInroductionById(id?.selectedId);

  if (!data) {
    return <EmptyState message="No Introduction Data" />
  }

  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>{data?.title}</h1>
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-400'>
            {data?.information?.map((res, key) => {
              return (
                <li key={key}>{res}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-300'>
        {data.description}
      </p>
    </section>
  )
}

export default Introduction
