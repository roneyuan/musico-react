export const clickRsvp = (event) => {
	console.log('Event is RSVP: ', event.name);
	return {
		// Type: describe the change
		// Payload: 
		type: "EVENT_RSVP",
		payload: event
	}
};

const requestAllUsersDataFromServer = (users) => ({
	type: 'REQUEST_ALL_USERS',
	users
})

const requestAllEventsDataFromServer = (users) => ({
	type: 'REQUEST_ALL_EVENTS',
	users
})

const receiveUserDataFromServer = (user) => ({
	type: 'RECEIVE_USER',
	user
})

const receiveEventDataFromServer = (event) => ({
	type: 'RECEIVE_EVENT',
	event
})

const receiveRsvpEventFromServer = (event) => ({
	type: 'RECEIVE_EVENT',
	event
})



// export const fetchDataFromApi = () => {
// 	return dispatch => {
// 		dispatch(requestDataFromAPI())

// 		fetch('/')
// 		.then(response => response.json())
// 		.then(json => dispatch(receiveDataFromAPI(json.results)))
// 		.catch(ex => console.log('parsing failed', ex))
// 	}
// }
const requestAllEventsDataFromAPI = () => {
	type: "REQUEST_ALL_EVENTS"
}

const receiveAllEventsDataFromAPI =(events) => {
	type: 'RECEIVE_ALL_EVENTS',
	events
}

export const getAllUsers = () => {
	console.log("GET ALL USERS CALLED")
	return dispatch => {
		fetch('http://localhost:8080/user/allUser', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(users => dispatch(requestAllUsersDataFromServer(users)))
	}
}

export const getAllEvents = () => {
	console.log("getAllEvents CALLED");

	return dispatch => {
		// dispatch(requestAllEventsDataFromAPI())

		fetch('http://localhost:8080/event/all', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then(response => {
			console.log("Get response:", response);
			response.json();
		})
		.then(json => {
			console.log("Get json", json);
			dispatch(receiveAllEventsDataFromAPI(json.results))
		})
		.catch(err => {
			console.log('Parsing failed', err);
		})
	}

	// return dispatch => {
	// 	fetch('http://localhost:8080/event/all', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	})
	// 	.then(response => response.json())
	// 	.then(events => {
	// 		console.log("+++++EVENTS+++++", events)
	// 		dispatch(requestAllEventsDataFromServer(events))
	// 	})
	// 	.catch(err => {
	// 		console.log("GET EVENTS ERROR", err)
	// 	})
	// }
}

export const postEvent = (name, price, description, location) => {
	return dispatch => {
		fetch('http://localhost:8080/user/allUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringfy({
				name,
				price,
				description,
				location
			})
		})
		.then(response => response.json())
		.then(event => dispatch(receiveEventDataFromServer(event)))
	}
}

export const rsvpEvent = (eventId) => {
	return dispatch => {
		fetch('http://localhost:8080/user/' + eventId, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(event => dispatch(receiveRsvpEventFromServer(event)))
	}
}

export const addUser = (username, password, nickname) => {
	return dispatch => {
		fetch('http://localhost:8080/user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringfy({
				username,
				passwords,
				nickname
			})
		})
		.then(response => response.json())
		.then(user => dispatch(receiveUserDataFromServer(user)))
	}
}












