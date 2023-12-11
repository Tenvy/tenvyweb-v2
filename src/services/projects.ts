const getProjects = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/projects`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

const getProjectById = async (id: string) => {
    const response = await fetch(process.env.SITE_URL + `/api/projects/${id}` , {method: 'GET', cache: 'no-store'})
    return response.json()
}
export { getProjects, getProjectById }
