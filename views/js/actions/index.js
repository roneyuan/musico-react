const receiveRegisterUser = (user) => ({
	type: 'RECEIVE_REGISTER_USER',
	user
})

const receivePostEvent = (event) => ({
	type: 'RECEIVE_POST_EVENT',
	event
})

const receiveUserRsvpEvents = (events) => {
	return {
		type: 'RECEIVE_USER_RSVP_EVENTS',
		events
	}
}

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

const receiveCancelRsvp = (user) => {
	return {
		type: 'RECEIVE_CANCEL_RSVP',
		user
	}
}

const receiveCancelEvent = (user) => {
	return {
		type: 'RECEIVE_CANCEL_EVENT',
		user
	}
}

const receiveToken = (token) => {
	return {
		type: 'RECEIVE_TOKEN',
		token
	}
}

const receivePositive = (event) => {
	return {
		type: 'RECEIVE_POSITIVE',
		event
	}
}

const receiveNegative = (event) => {
	return {
		type: 'RECEIVE_NEGATIVE',
		event
	}
}

const receiveComment = (event) => {
	return {
		type: 'RECEIVE_COMMENT',
		event
	}
}

export const postComment = (event, accessToken) => {
	console.log("CALLED")
	return dispatch => {
		fetch('/api/event/postComment', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			},
			body: 
				JSON.stringify({
				eventId: event,
				comment: "Good"
			})
			
		})
		.then(response => response.json())
		.then(event => dispatch(receiveComment(event)))
	}
}

export const getUserRsvpEvents = (accessToken) => {
	return dispatch => {
		fetch('/api/user/getRsvpProfile', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			}
		})
		.then(response => response.json())
		.then(json => {
			let eventsRsvp = json.eventsRsvp;			
			// console.log(eventsRsvp)
			dispatch(receiveUserRsvpEvents(eventsRsvp))
		})
		.catch(err => {
			// dispatch the error
			console.log(err);
		})
	}
};

export const positiveExpectation = (event, accessToken) => {
	// console.log("event", event)
	return dispatch => {
		fetch('/api/event/updatePositive', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			},
			body: 
				JSON.stringify({
				eventId: event
			})
			
		})
		.then(response => response.json())
		.then(event => dispatch(receivePositive(event)))
	}
}

export const negativeExpectation = (event, accessToken) => {
	return dispatch => {
		fetch('/api/event/updateNegative', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			},
			body: 
				JSON.stringify({
				eventId: event
			})			
		})
		.then(response => response.json())
		.then(event => dispatch(receiveNegative(event)))
	}	
}

export const newPostForm = () => {
	return {
		type: 'NEW_POST_FORM'
	}
}

export const cancelRsvp = (event, accessToken ) => {
	return dispatch => {
		fetch('/api/user/cancelRsvp/' + event._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			}
		})
		.then(response => response.json())
		.then(user => dispatch(receiveCancelRsvp(user)))
	}
};

export const cancelEvent = (event, accessToken) => {
	return dispatch => {
		fetch('/api/user/cancelEvent/' + event._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			}
		})
		.then(response => response.json())
		.then(event => {
			console.log("CANCEL", event)
			dispatch(receiveCancelEvent(event))
		})
	}
};

export const clickRsvp = (event, accessToken) => {
	return dispatch => {
		fetch('/api/user/' + event._id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
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
	return dispatch => {
		fetch('/api/demo/user/allUser', {
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
export const getUserProfile = (accessToken, username) => {
	return dispatch => {
		fetch('/api/user/profile/' + username, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
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

export const getAllEvents = (accessToken) => {
	return dispatch => {
		fetch('/api/event/all', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
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

export const postEvent = (name, price, description, location, tag, time, accessToken) => {
	return dispatch => {
		fetch('/api/event', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
			},
			body: JSON.stringify({
				name: name,
				price: price,
				description: description,
				location: location,
				tag: tag,
				time: time
			})
		})
		.then(response => response.json())
		.then(event => dispatch(receivePostEvent(event))) // Need reducers for that? Not necessary.
	}
}

export const addUser = (username, password, nickname) => {
	return dispatch => {
		fetch('/api/demo/user/' + username, {
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












