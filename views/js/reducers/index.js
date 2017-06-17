import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import EventDatabase from './events-database';
import UserAPI from './user-api';

const AllReducers = combineReducers({
	events: EventReducer,
	eventsDatabase: EventDatabase,
	userAPI: UserAPI
});

export default AllReducers;