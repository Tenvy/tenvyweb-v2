const getOwner = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/user/owner`, {method: 'GET'})
    return response.json()
}

export { getOwner }