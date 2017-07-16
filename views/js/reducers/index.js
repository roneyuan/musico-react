import {combineReducers} from 'redux';
import EventDatabase from './events-database';
import UserDatabase from './user-database';
import PostedEvent from './posted-event';

const AllReducers = combineReducers({
	eventsDatabase: EventDatabase,
	userDatabase: UserDatabase,
	postedEvent: PostedEvent
});

export default AllReducers;