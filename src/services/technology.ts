const getTechnology = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/technology`, {method: 'GET', cache: 'no-store'})
    return response.json()
}

export { getTechnology }