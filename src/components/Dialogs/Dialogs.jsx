import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

//STYLES
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
