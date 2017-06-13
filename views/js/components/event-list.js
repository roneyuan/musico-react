import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Event from './event';
import {clickRsvp} from '../actions/index';

class EventList extends Component {
	createEventList() {
		return this.props.events.map(event => {
			return (
				<div key={event.id}>
					<Event name={event.name}
								 tag={event.tag}
								 description={event.description}
								 price={event.price}
								 location={event.location}
								 rsvpClick={() => this.props.clickRsvp(event)} />
				</div>
			)
		})
	}

	render() {
		return(
			<div className='event-list'>
				{this.createEventList()}					 						 
			</div>			
		)
	}
}

function mapStateToProps(state) {
	return {
		events: state.events
	}
}

// Call a function
function matchDispatchToProps(dispatch) {
	return bindActionCreators({clickRsvp: clickRsvp}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);