import React from "react";

//STYLES
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg" />
        <div className={styles.descriptionBlock}>ava + desc</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
