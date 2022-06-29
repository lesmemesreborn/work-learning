import React from 'react'

//STYLES
import classes from "./Post.module.css"

const Post = () => {
    return ( 
        <div className={classes.item}>
          <img src='https://cdn-icons-png.flaticon.com/128/6997/6997508.png'/>
          post 1
          <div><span>like</span></div>
        </div>     
  )
}

export default Post