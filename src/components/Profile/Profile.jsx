import React from "react"

//COMPONENTS
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

//STYLES
import styles from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
