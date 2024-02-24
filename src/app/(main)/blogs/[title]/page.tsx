import React from 'react'
import BlogDetail from './components/BlogDetail'
import { getBlogsById } from '@/services/blogs'
import BackButton from '@/components/elements/BackButton'

const Page = async ({ params }: { params: { title: number } }) => {
    const data = await getBlogsById(params.title)

  return (
    <div>
      <BackButton url='/blogs'/>
      <BlogDetail {...data}/>
    </div>
  )
}

export default Page
