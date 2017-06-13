import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Event from './event';


class EventList extends Component {
	createEventList() {
		return this.props.events.map(event => {
			return (
				<div key={event.id}>
					<li>{event.name}</li>
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

export default connect(mapStateToProps)(EventList);