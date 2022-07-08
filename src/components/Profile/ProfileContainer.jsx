import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainerComponent);
