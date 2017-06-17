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

const requestAllEventsDataFromAPI = () => {
	type: "REQUEST_ALL_EVENTS"
}

const receiveUserProfileFromAPI = (user) => {
	console.log("receiveUserProfileFromAPI:", user)
	return {
		type: 'RECEIVE_USER_PROFILE',
		user
	}
}

const receiveAllEventsDataFromAPI = (events) => {
	// console.log("receiveAllEventsDataFromAPI:", events);
	return {
	type: 'RECEIVE_ALL_EVENTS',
	events
	}
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

export const getUserProfile = () => {
	console.log("getUserProfile CALLED");
	return dispatch => {
		fetch('http://localhost:8080/user/profile/new2', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			dispatch(receiveUserProfileFromAPI(json))
		})
		.catch(err => {
			console.log(err);
		})
	}
}

export const getAllEvents = () => {
	// console.log("getAllEvents CALLED");

	return dispatch => {
		// dispatch(requestAllEventsDataFromAPI())

		fetch('http://localhost:8080/event/all', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				// Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {		
			// console.log("JSON response", json);
			dispatch(receiveAllEventsDataFromAPI(json));
		})		
		.catch(err => {
			console.error('Parsing failed', err);
		})
	}
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
				location,
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












