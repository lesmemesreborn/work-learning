import React from "react"
import { NavLink, Navigate } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import Dialogs from "./Dialogs"
import { compose } from "redux"

//STYLES
import styles from "./Dialogs.module.css"
import { sendMessageCreator } from "../../redux/messagesReducer"
import { connect } from "react-redux"
import { withAuthNavigate } from "../../hoc/withAuthNavigate"

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs)
