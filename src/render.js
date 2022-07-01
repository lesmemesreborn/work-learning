import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//STATE
import { addPost, updateNewPostText } from "./redux/state";
import state from "./redux/state";

//STYLES
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = () => {
  root.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};
