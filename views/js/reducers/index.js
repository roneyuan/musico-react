import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import EventDatabase from './events-database';
import UserAPI from './user-api';
import UserDatabase from './user-database';

const AllReducers = combineReducers({
	events: EventReducer,
	eventsDatabase: EventDatabase,
	userAPI: UserAPI,
	userDatabase: UserDatabase
});

export default AllReducers;