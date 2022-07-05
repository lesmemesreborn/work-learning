import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//STATE
import store from "./redux/redux-store";

//STYLES
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  debugger;
  root.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
