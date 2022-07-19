import React from "react"
import Preloader from "../../common/Preloader"
import ProfileStatus from "./ProfileStatus"

//STYLES
import styles from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg" />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"статус"} />
        <div>
          {props.profile.fullName}, {props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
