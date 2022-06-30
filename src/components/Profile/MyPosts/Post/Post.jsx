import React from 'react'

//STYLES
import styles from "./Post.module.css"

const Post = (props) => {
    return ( 
        <div className={styles.item}>
          <img src='https://cdn-icons-png.flaticon.com/128/6997/6997508.png'/>
          <div>{props.message}</div>
          <div>{props.likes} likes</div>
          <div><span>like</span></div>
        </div>     
  )
}

export default Post