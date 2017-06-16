export default function (state=null, action) {
	switch(action.type) {
		case "EVENT_RSVP":
			return action.payload;
		break;
	}
	return state;
}