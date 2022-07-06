import React from "react";
import { connect } from "react-redux";

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
import StoreContext from "../../../StoreContext";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
