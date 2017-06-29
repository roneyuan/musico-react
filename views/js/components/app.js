import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventList from './event-list';
import Login from './login';
import Navigation from './navigation';
import PostEvent from './post-event';
import Profile from './profile';
import Registration from './registration';
import { addUser, cancelEvent, cancelRsvp, clickRsvp, getAllEvents, getUserProfile, postEvent } from '../actions/index';
import * as Cookies from 'js-cookie';


class App extends Component {
	// componentWillMount() {
	// 	const accessToken = Cookies.get('accessToken');
	// }

	render() {
		console.log(this.props.children)
		return(
			<div className="app">
				<Navigation />
				{this.props.children}
		</div>
		)

	}
}


function mapStateToProps(state) {
	return {
		events: state.eventsDatabase.events,
		user: state.userDatabase.user
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addUser,
		cancelEvent,
		cancelRsvp,
		clickRsvp,
		getAllEvents,		
		getUserProfile, 
		postEvent,
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);