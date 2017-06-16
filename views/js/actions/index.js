export const clickRsvp = (event) => {
	console.log('Event is RSVP: ', event.name);
	return {
		// Type: describe the change
		// Payload: 
		type: "EVENT_RSVP",
		payload: event
	}
};

const requestDataFromAPI = () => ({
	type: 'REQUEST_DATA'
})

const receiveDataFromAPI = () => ({
	type: 'RECEIVE_DATA',
	data
})

const receiveDataFromServer = (user) => ({
	type: 'RECEIVE_USERS',
	user
})

export const fetchDataFromApi = () => {
	return dispatch => {
		dispatch(requestDataFromAPI())

		fetch('/')
		.then(response => response.json())
		.then(json => dispatch(receiveDataFromAPI(json.results)))
		.catch(ex => console.log('parsing failed', ex))
	}
}

export const getUser = () => {
	return dispatch => {
		fetch('http://localhost:8080/user/allUser', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(users => dispatch(receiveDataFromServer(users)))
	}
}


export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => ({
    type: FETCH_DESCRIPTION_SUCCESS,
    repository,
    description
});

export const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repository, error) => ({
    type: FETCH_DESCRIPTION_ERROR,
    repository,
    error
});