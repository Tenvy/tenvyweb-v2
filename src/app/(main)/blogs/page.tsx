import PageHeading from '@/components/elements/PageHeading';

import { NextPage } from 'next';
import Blogs from './components/Blogs';
import { getBlogs } from '@/services/blogs';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION =
  'A detailed breakdown of how I turn ideas into written pieces';

const BlogPage: NextPage = async () => {
    const blogs = await getBlogs()

  return (
    <>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blogs blogs={blogs}/>
    </>
  );
};

export default BlogPage;