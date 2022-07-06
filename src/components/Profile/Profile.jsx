import React from "react";

//COMPONENTS
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

//STYLES
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />

      <MyPostsContainer
      // store={props.store}
      // postsData={props.profilePage.postsData}
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
