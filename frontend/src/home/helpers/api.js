const API_URL = import.meta.env.VITE_API_URL;

export const fetchCreatePost = async(data) => {

    const response = fetch(`${API_URL}/user/publications/`, )


}

export const fetchCommunities = async() => {
    const access_token = sessionStorage.getItem("access_token")
    const response = await fetch(`${API_URL}/user/community`, {
        headers: {'Content-type': 'application/json'},
    })
    const data = await response.json()
    return data
}

export const fetchJoinCommunity = async(id) => {
    const userId = sessionStorage.getItem("user_id")
    const access_token = sessionStorage.getItem("access_token")
    const response = await fetch(`${API_URL}/user/community/${id}/`, {
        headers: {'Content-type': 'application/json', 'X-User-ID': userId},
    })
    const data = await response.json()
    return data
}

export const fetchFollowCommunity = async(id) => {
    const userId = sessionStorage.getItem("user_id")
    const access_token = sessionStorage.getItem("access_token")
    const response = await fetch(`${API_URL}/user/community/follow/`, {
        method: "POST",
        headers: {'Content-type': 'application/json', 'X-User-ID': userId},
        body: JSON.stringify({
            comunidad_id: id
        })
    })
    const data = await response.json()
    return data
}

export const fetchCreateCommunityPost = async(data, comunidad) => {
    const userId = sessionStorage.getItem("user_id")
    const organizacionId = sessionStorage.getItem("organizacion_id")
    const access_token = sessionStorage.getItem("access_token")
    const response = await fetch(`${API_URL}/user/publications`, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            ...data,
            autor_usuario: userId,
            autor_organizacion: userId,
            comunidad
        })
    })
    const newData = await response.json()
    return newData
}
export const fetchEvent = async(id) => {
    const response = await fetch(`${API_URL}/user/organization/event`, {
        method: "GET",
        headers: {'Content-type': 'application/json'},
    })
    const data = await response.json()
    return data
}
