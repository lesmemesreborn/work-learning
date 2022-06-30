import React from "react";
import { NavLink } from "react-router-dom";

//STYLES
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/ + props.id";

  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Max" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Yura" },
    { id: 5, name: "Yulya" },
    { id: 6, name: "Chris" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How r u?" },
    { id: 3, message: "Fine" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Wheres my img elem?" },
    { id: 6, message: "?" },
  ];

  let messagesElements = messagesData.map((m) => (
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
