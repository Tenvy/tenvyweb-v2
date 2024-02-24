import axios from "axios";

interface userType {
  username: string;
  nickname: string;
  email: string;
  password: string;
}

const getUserId = (username: string) => {
  return axios.get(`/api/user/${username}`)
}

const updateUser = (data: userType, image: any) => {
  const formData = new FormData()
  formData.append('nickname', data.nickname);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.set('image', image);

  return axios.patch(`/api/user`, formData)
  
}

export { getUserId, updateUser }
