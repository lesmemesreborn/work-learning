import React from "react"
import { NavLink } from "react-router-dom"

//STYLES
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
