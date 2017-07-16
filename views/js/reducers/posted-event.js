const initialState = {
	postedEvent: []
}

const eventsDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_POST_EVENT':
			return {
				...state,
				postedEvent: action.event
			}

		case 'NEW_POST_FORM':
			return {
				...state,
				postedEvent:[]
			}

		default:
			return state;
	}
}

export default eventsDatabase;