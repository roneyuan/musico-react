const initialState = {
	events: []
}

const rsvpEvents = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_ALL_RSVP_EVENTS':
			return {
				...state,
				events: action.event
			}

		default:
			return state;
	}
}

export default rsvpEvents;