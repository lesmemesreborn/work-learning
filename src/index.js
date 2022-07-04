import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//STATE
import store from "./redux/state";

//STYLES
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
