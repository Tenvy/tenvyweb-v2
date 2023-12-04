const getTechnology = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/technology`, {method: 'GET'})
    return response.json()
}

export { getTechnology }