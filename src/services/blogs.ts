const getBlogs = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/blogs`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

const getBlogsById = async (id: string) => {
    const response = await fetch(process.env.SITE_URL + `/api/blogs/${id}` , {method: 'GET', cache: 'no-store'})
    return response.json()
}
export { getBlogs, getBlogsById }
