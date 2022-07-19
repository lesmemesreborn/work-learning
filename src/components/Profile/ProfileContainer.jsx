import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import { getUserProfile } from "../../redux/profileReducer"
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
      userId = 2
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
)(ProfileContainer)
