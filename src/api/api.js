import * as axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "4c2c59e2-3903-44d2-9497-79e624f2c257" },
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(
        `
users?page=${currentPage}&count=${pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
}
