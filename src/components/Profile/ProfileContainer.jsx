import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profileReducer"
import { connect } from "react-redux"
import { useParams, Navigate } from "react-router-dom"
import { withAuthNavigate } from "../../hoc/withAuthNavigate"
import { compose } from "redux"

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams()
  return <WrappedComponent {...props} params={params} />
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    console.log("RENDER PROFILE")
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.params.userId}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer)
