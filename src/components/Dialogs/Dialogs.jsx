import React from "react"
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import AddMessageForm from "./AddMessageForm/AddMessageForm"

//STYLES
import styles from "./Dialogs.module.css"
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messagesReducer"

const Dialogs = (props) => {
  debugger
  let state = props.messagesPage
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ))
  let newMessageBody = state.newMessageBody
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Navigate to={"/login"} />
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs
