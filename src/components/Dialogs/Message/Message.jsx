import React from "react";
import { NavLink } from "react-router-dom";

//STYLES
import styles from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={styles.dialog}>{props.message}</div>;
};

export default Message;
