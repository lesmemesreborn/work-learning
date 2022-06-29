import React from 'react'

//COMPONENTS
import MyPosts from './MyPosts/MyPosts'

//STYLES
import classes from "./Profile.module.css"

const Profile = () => {
    return ( 
      <div className={classes.content}>
      <img src="https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg" />
      <div>ava + desc</div>
      <MyPosts />
    </div>
  )
}

export default Profile