import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from './event';
import { clickRsvp, getAllEvents } from '../actions/index';
import * as Cookies from 'js-cookie';
import Moment from 'moment';


class EventList extends Component {

	componentWillMount() {
		const accessToken = Cookies.get('accessToken');
		this.props.getAllEvents(accessToken)
	}

	createEventList() {
		const accessToken = Cookies.get('accessToken'); // Better way to refactor?
		return this.props.events.map((event, index) => {
			return (
				<div className="content__event-box" key={ index }>
					<Event name={ event.name }
								 tag={ event.tag }
								 description={ event.description }
								 price={ event.price }
								 location={ event.location }
								 time={ Moment(event.time).format('LLLL') }
								 buttonEvent={ "btn__rsvp" }
								 eventClick={
								 	() => this.props.clickRsvp(event, accessToken)
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
	return {
		events: state.eventsDatabase.events,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ clickRsvp, getAllEvents }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);