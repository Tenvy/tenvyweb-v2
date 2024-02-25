const updateViews = async(id: number) => {
    const response = await fetch(`/api/views/${id}`, {method: 'PATCH'})
    return response.json()
}

export { updateViews }