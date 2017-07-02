import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DemoEvent from './event';
import { demoClickRsvp, demoGetAllEvents } from '../../actions/demo/index';


class EventList extends Component {

	componentWillMount() {
		this.props.demoGetAllEvents()
	}

	createEventList() {
		return this.props.events.map((event, index) => {
			return (
				<div className="col-4" key={ index }>
					<DemoEvent name={ event.name }
								 tag={ event.tag }
								 description={ event.description }
								 price={ event.price }
								 location={ event.location }
								 eventClick={
								 	() => this.props.demoClickRsvp(event)
								 } />
				</div>
			)
		})
	}

	render() {
		return(
			<div className='event-list'>
				{ this.createEventList() }					 						 
			</div>			
		)
	}
}

function mapStateToProps(state) {
	// console.log("STATE", state)
	return {
		events: state.eventsDatabase.events,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ demoClickRsvp, demoGetAllEvents }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);