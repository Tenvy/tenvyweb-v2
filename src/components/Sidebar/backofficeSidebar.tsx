import Link from "next/link"

const backofficeSidebar = () => {
  return (
    <header className='w-[20%] h-[100vh]'>
      <div className='text-2xl font-bold flex items-center justify-center h-[100px]'>
        <Link href="/backoffice">Tenvy Backoffice</Link>
      </div>
      <div className='flex w-full justify-center'>
        <div className='bg-white w-[90%] h-[2px] my-4' />
      </div>
      <div className="flex flex-col gap-2 mx-2">
        <Link className="py-2 rounded hover:bg-gray-500" href="/backoffice/profile">
          <div className="ml-2">
            Profile
          </div>
        </Link>
        <Link className="py-2 rounded hover:bg-gray-500" href="/backoffice/blogs">
          <div className="ml-2">
            Blogs
          </div>
        </Link>
        <Link className="py-2 rounded hover:bg-gray-500" href="/backoffice/projects">
          <div className="ml-2">
            Projects
          </div>
        </Link>
        <Link className="py-2 rounded hover:bg-gray-500" href="/backoffice/skills">
          <div className="ml-2">
            Skills
          </div>
        </Link>
      </div>
    </header>
  )
}

export default backofficeSidebar
