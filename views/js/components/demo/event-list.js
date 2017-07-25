import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DemoEvent from '../event';
import { demoClickRsvp, demoGetAllEvents, getUserRsvpEvents } from '../../actions/demo/index';
import Moment from 'moment';

class EventList extends Component {

	componentWillMount() {
		this.props.getUserRsvpEvents();
		this.props.demoGetAllEvents();
	}

	createEventList() {
		// console.log("PREV", this.props.events)
		let reverseList = this.props.events.slice().reverse(); // Need to use slice to copy, otherwise props cannot be changed which will not work
		// console.log("REV", reverseList)

		return reverseList.map((event, index) => {
			
			let ifRsvp = false;
			let rsvpNotice = '';

			this.props.rsvp.forEach(rsvpEvent => {
				if (event._id === rsvpEvent._id) {
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
								 numberOfRsvp={ event.numberOfRsvp }
								 expectedPositive={ event.expectedPositive }
								 expectedNegative={ event.expectedNegative }								 
								 time={ Moment(event.time).format('LLLL') }
								 buttonEvent={ "btn__rsvp" }
								 ifRsvp={ ifRsvp }
								 notice={ rsvpNotice }
								 eventClick={
								 	() => {
								 		this.props.demoClickRsvp(event);
								 		this.props.getUserRsvpEvents();
								 	}
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