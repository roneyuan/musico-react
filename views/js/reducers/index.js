import {combineReducers} from 'redux';
import EventDatabase from './events-database';
import UserDatabase from './user-database';

const AllReducers = combineReducers({
	eventsDatabase: EventDatabase,
	userDatabase: UserDatabase
});

export default AllReducers;