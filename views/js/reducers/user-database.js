const initialState = {
	user: []
}

const userDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_USER_PROFILE':
					console.log("RECEIVE", action)
			return {
				...state,
				user: action.user
			}

		case 'RECEIVE_CANCEL_EVENT':
			console.log("CANCEL", action)
			return {
				...state,
				user: action.user
			}			

		default:
			return state;
	}
}

export default userDatabase;