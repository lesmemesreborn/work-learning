import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e651e936-8cf8-47be-8ae4-566496ff40b3" },
});

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
      .then((response) => response.data);
  },
};
