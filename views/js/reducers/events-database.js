const initialState = {
	events: []
}

const eventsDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'REQUEST_ALL_EVENTS':
			return {
				...state,
			}

		case 'RECEIVE_ALL_EVENTS':
			return {
				...state,
				events: action.events
			}	

		case 'RECEIVE_POST_EVENT':
			console.log("ACT", action)
			return {
				...state,
				events: action.event
			}

		case 'NEW_POST_FORM':
			return {
				events:[]
			}

		default:
			return state;
	}
}

export default eventsDatabase;