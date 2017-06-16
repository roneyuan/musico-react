import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import ActiveUserReducer from './reducer-active-user';

const AllReducers = combineReducers({
	events: EventReducer,
	activeUser: ActiveUserReducer
});

export default AllReducers;