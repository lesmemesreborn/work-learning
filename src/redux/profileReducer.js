import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how r u?", likes: 4 },
    { id: 2, message: "It's my 1st post", likes: 15 },
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likes: 0,
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      }
    }
    default:
      return state
  }
}

export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export default profileReducer
