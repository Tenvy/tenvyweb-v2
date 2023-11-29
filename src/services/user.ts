import axios from "axios";
import { NextResponse } from "next/server";

const getUserId = (username: string) => {
    return axios.get(`/api/user/${username}`)
}

const updateUsername = async (username: string) => {
    const userCheck = await axios.get(`/api/user/${username}`)
    if(userCheck) {
        return NextResponse.json("User is already exist!")
    }
    return axios.patch(`/api/user/${username}`, { username })
}

const updateEmail = (username:string, email: string) => {
    return axios.patch(`/api/user/${username}`, { email })
}

export { getUserId, updateUsername, updateEmail }