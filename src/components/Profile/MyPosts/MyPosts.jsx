import React from "react"
import { Field, reduxForm } from "redux-form"
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls"

//COMPONENTS
import Post from "./Post/Post"

//STATE
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profileReducer"

//STYLES
import styles from "./MyPosts.module.css"

const maxLength10 = maxLengthCreator(10)
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post Message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
)

const MyPosts = React.memo((props) => {
  console.log("RENDER")
  let postsElements = [...props.postsData]
    .reverse()
    .map((p) => <Post message={p.message} likes={p.likes} />)

  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
})

export default MyPosts
