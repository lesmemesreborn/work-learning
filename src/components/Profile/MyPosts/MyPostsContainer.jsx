import React from "react";

//COMPONENTS
import Post from "./Post/Post";
import MyPosts from "./MyPosts";

//STATE
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profileReducer";

//STYLES
import styles from "./MyPosts.module.css";

const MyPostsContainer = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

  return <MyPosts />;
};

export default MyPostsContainer;
