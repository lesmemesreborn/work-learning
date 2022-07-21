import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { applyMiddleware } from "redux"
import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

let store = configureStore(
  {
    reducer: reducers,
  },
  applyMiddleware(thunk)
)

window.store = store

export default store
