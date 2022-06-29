import React from 'react'

//COMPONENTS
import Post from './Post/Post'

//STYLES
import classes from "./MyPosts.module.css"

const MyPosts = () => {
    return ( 
      <div className={classes.content}>
      <div>
        My posts
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.post}>
        <Post />
      </div>
    </div>
  )
}

export default MyPosts