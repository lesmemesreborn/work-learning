import React from "react"
import { connect } from "react-redux"
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/Preloader"
import { withAuthNavigate } from "../../hoc/withAuthNavigate"
import { compose } from "redux"
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/usersSelectors"

class UsersContainer extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.users.length === 0) {
      // this.props.toggleIsFetching(true)
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true)
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    console.log("USERS")
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

const mapStateToProps = (state) => {
  console.log("mapStateToProps USERS")
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: requestUsers,
  })
)(UsersContainer)
