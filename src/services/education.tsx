const getEducation = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/education`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

export { getEducation }