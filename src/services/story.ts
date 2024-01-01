const getStory = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/about`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

export { getStory }