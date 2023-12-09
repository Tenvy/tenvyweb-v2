const getInroduction = async () => {
    const response = await fetch(process.env.SITE_URL + `/api/introduction`, {method: 'GET'})
    return response.json()
}

const getInroductionById = async (id: string) => {
    const response = await fetch(process.env.SITE_URL + `/api/introduction/${id}`, {method: 'GET'})
    return response.json()
}

export { getInroduction, getInroductionById }