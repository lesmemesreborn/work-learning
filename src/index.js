import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"

//STATE
import store from "./redux/redux-store"

//STYLES
import "./index.css"

setInterval(() => {
  store.dispatch({ type: "FAKE" })
}, 1000)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
