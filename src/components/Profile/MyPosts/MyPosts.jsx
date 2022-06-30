import React from "react";

//COMPONENTS
import Post from "./Post/Post";

//STYLES
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how r u?", likes: 4 },
    { id: 2, message: "It's my 1st post", likes: 15 },
  ];

  let postsElements = postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  return (
    <div className={styles.postsBlock}>
      <div>
        My posts
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
