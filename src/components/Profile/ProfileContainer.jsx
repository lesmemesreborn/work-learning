import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import {
  getUserProfile,
  getStatus,
  updateStatus,
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
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer)
