const initialState = {
	comment: '',
	eventId: null,
	show: false
}

const commentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'REQUEST_COMMENT_FORM':
			return {
				...state,
				eventId: action.eventId,
				show: true
			}

		case 'CLOSE_COMMENT_FORM':
			return {
				...state,
				show: false
			}			

		default:
			return state;
	}
}

export default commentReducer;