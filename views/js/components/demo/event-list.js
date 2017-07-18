import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DemoEvent from '../event';
import { demoClickRsvp, demoGetAllEvents, getUserRsvpEvents } from '../../actions/demo/index';
import Moment from 'moment';

class EventList extends Component {

	componentWillMount() {
		// Get User RSVP events.
		this.props.getUserRsvpEvents();
		this.props.demoGetAllEvents();
	}

	createEventList() {
		return this.props.events.map((event, index) => {
			let ifRsvp = false;
			let rsvpNotice = '';

			this.props.rsvp.forEach(rsvpEvent => {
				if (event._id === rsvpEvent._id) {
					// Why it was called four times?
					console.log("RSVP:", event)
					ifRsvp = true;
					rsvpNotice = "You have rsvp the event";
				}
			})

			return (
				<div className="content__event-box" key={ index }>
					<DemoEvent name={ event.name }
								 tag={ event.tag }
								 description={ event.description }
								 price={ event.price }
								 location={ event.location }
								 time={ Moment(event.time).format('LLLL') }
								 buttonEvent={ "btn__rsvp" }
								 ifRsvp={ ifRsvp }
								 notice={ rsvpNotice }
								 eventClick={
								 	() => this.props.demoClickRsvp(event)
								 } />
				</div>
			)
		})
	}

	render() {
		return(
			<div className='content__events__wrap'>
				{ this.createEventList() }					 						 
			</div>			
		)
	}
}

function mapStateToProps(state) {
	// console.log("STATE", state)
	return {
		events: state.eventsDatabase.events,
		rsvp: state.eventsDatabase.rsvp
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ demoClickRsvp, demoGetAllEvents, getUserRsvpEvents }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);