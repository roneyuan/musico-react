import { combineReducers } from 'redux';
import CommentReducer from './comment-reducer';
import EventDatabase from './events-database';
import PostedEvent from './posted-event';
import UserDatabase from './user-database';


const AllReducers = combineReducers({
	commentReducer: CommentReducer,
	eventsDatabase: EventDatabase,
	postedEvent: PostedEvent,
	userDatabase: UserDatabase
});


export default AllReducers;