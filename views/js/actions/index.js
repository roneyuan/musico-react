const receiveRegisterUser = (user) => ({
	type: 'RECEIVE_REGISTER_USER',
	user
})

const receivePostEvent = (event) => ({
	type: 'RECEIVE_POST_EVENT',
	event
})

const receiveRsvpEvent = (event) => ({
	type: 'RECEIVE_RSVP_EVENT',
	event
})

const receiveUserProfileFromAPI = (user) => {
	return {
		type: 'RECEIVE_USER_PROFILE',
		user
	}
}

const receiveAllEventsDataFromAPI = (events) => {
	return {
	type: 'RECEIVE_ALL_EVENTS',
	events
	}
}

const receiveCancelRsvp = (event) => {
	return {
		type: 'RECEIVE_CANCEL_RSVP',
		event
	}
}

const receiveCancelEvent = (user) => {
	return {
		type: 'RECEIVE_CANCEL_EVENT',
		user
	}
}

export const cancelRsvp = (event) => {
	return dispatch => {
		fetch('http://localhost:8080/user/cancelRsvp/' + event._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(user => dispatch(receiveCancelRsvp(user)))
	}
};

export const cancelEvent = (event) => {
	return dispatch => {
		fetch('http://localhost:8080/user/cancelEvent/' + event._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(event => {
			console.log("CANCEL", event)
			dispatch(receiveCancelEvent(event))
		})
	}
};

export const clickRsvp = (event) => {
	// console.log('Event is RSVP: ', event);
	return dispatch => {
		fetch('http://localhost:8080/user/' + event._id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: "new2",
				name: event.name,
				location: event.location,
				time: event.time,
				description: event.description,
				tag: event.tag,
				price: event.price
			})
		})
		.then(response => response.json())
		.then(event => dispatch(receiveRsvpEvent(event)))
	}
};

export const getAllUsers = () => {
	// console.log("GET ALL USERS CALLED")
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


/*************
GET
**************/
export const getUserProfile = () => {
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
			// dispatch the error
			console.log(err);
		})
	}
}

export const getAllEvents = () => {
	return dispatch => {
		fetch('http://localhost:8080/event/all', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(response => response.json())
		.then(json => {		
			dispatch(receiveAllEventsDataFromAPI(json));
		})		
		.catch(err => {
			console.error('Parsing failed', err);
		})
	}
}

export const postEvent = (name, price, description, location, tag) => {
	// console.log("postEvent CALLED:", name)
	return dispatch => {
		fetch('http://localhost:8080/event', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name,
				price: price,
				description: description,
				location: location,
				tag: tag,
				username: "new2"
			})
		})
		.then(response => response.json())
		.then(event => dispatch(receivePostEvent(event))) // Need reducers for that? Not necessary.
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
		.then(event => dispatch(receiveRsvpEvent(event)))
	}
}

export const addUser = (username, password, nickname) => {
	return dispatch => {
		fetch('http://localhost:8080/user/' + username, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
				nickname
			})
		})
		.then(response => response.json())
		.then(user => dispatch(receiveRegisterUser(user)))
	}
}












