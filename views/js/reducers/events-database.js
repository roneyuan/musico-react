const initialState = {
	events: []
}

const eventsDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'REQUEST_ALL_EVENTS':
			console.log("REQUEST!!!");
			return {
				...state,
			}

		case 'RECEIVE_ALL_EVENTS':
			console.log("RECEIVE!!!")
			return {
				...state,
				events: action.events
			}	

		default:
			return state;
	}
}

export default eventsDatabase;