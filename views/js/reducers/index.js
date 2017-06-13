import {combineReducers} from 'redux';
import EventReducer from './reducer-events';

const AllReducers = combineReducers({
	events: EventReducer
});

export default AllReducers;