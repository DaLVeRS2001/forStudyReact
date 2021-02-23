import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
	componentDidMount() {

		let userId = this.props.match.params.userId
		this.props.setProfile(userId)
	}


	render() {
		return <Profile  {...this.props} profile={this.props.profile}/>
	}
}

let mapStateToProps = (state)=> {
	return {
		profile: state.profileReducer.profile,
		status: state.profileReducer.status
	}
}



export default compose(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, {setProfile})
)(ProfileContainer)
