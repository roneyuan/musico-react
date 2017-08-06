import { combineReducers } from 'redux';
import CommentReducer from './comment-reducer';
import EventDatabase from './events-database';
import UserDatabase from './user-database';


const AllReducers = combineReducers({
	commentReducer: CommentReducer,
	eventsDatabase: EventDatabase,
	userDatabase: UserDatabase
});


export default AllReducers;