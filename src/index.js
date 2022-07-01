import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { rerenderEntireTree } from "./render";

//STATE
import state from "./redux/state";
import { addPost } from "./redux/state";

//STYLES
import "./index.css";

rerenderEntireTree(state);
