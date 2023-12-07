const getProjects = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/projects`, {method: 'GET'})
    return response.json()
}

const getProjectById = async (id: string) => {
    const response = await fetch(process.env.SITE_URL + `/api/projects/${id}` , {method: 'GET'})
    return response.json()
}
export { getProjects, getProjectById }
