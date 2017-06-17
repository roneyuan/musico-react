const initialState = {
	user: []
}

const userDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_USER_PROFILE':
			console.log("REQUEST!!!", action.user);
			return {
				...state,
				user: action.user
			}

		default:
			return state;
	}
}

export default userDatabase;