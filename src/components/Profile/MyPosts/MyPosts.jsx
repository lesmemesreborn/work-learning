import React from "react";

//COMPONENTS
import Post from "./Post/Post";

//STATE
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profileReducer";

//STYLES
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
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

  return (
    <div className={styles.postsBlock}>
      <div>
        My posts
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
