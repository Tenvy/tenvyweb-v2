import EmptyState from '@/components/elements/EmptyState';

import BlogCard from './BlogCard';
import { BlogsProps } from '@/types/blog';

interface ProjectsComponentProps {
  blogs: BlogsProps['blogs'];
}

const Blogs = ({ blogs }: ProjectsComponentProps) => {

  if (blogs.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
      <div className='grid sm:grid-cols-2 gap-10 pt-2 px-1'>
        {blogs.map((blog, index) => (
            <BlogCard {...blog} key={index}/>
        ))}
      </div>
  );
};

export default Blogs;