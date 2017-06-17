const initialState = {
	user: []
}

const userDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_USER_PROFILE':
			return {
				...state,
				user: action.user
			}

		default:
			return state;
	}
}

export default userDatabase;