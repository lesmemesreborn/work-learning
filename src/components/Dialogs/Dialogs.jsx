import React from "react"
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Navigate } from "react-router-dom"

//STYLES
import styles from "./Dialogs.module.css"
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messagesReducer"

const Dialogs = (props) => {
  let state = props.messagesPage
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ))

  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  if (!props.isAuth) return <Navigate to={"/login"} />

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter ur msg..."
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
