import React from "react";

//STYLES
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" />
      <div>My React Application</div>
    </header>
  );
};

export default Header;
