const getCareer = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/career`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

export { getCareer }