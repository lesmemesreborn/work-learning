import React from "react"
import Preloader from "../../common/Preloader"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

//STYLES
import styles from "./ProfileInfo.module.css"

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg" />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>
          {profile.fullName}, {profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
