import {combineReducers} from 'redux';
import EventDatabase from './events-database';
import UserDatabase from './user-database';
import PostedEvent from './posted-event';
import CommentReducer from './comment-reducer';

const AllReducers = combineReducers({
	eventsDatabase: EventDatabase,
	userDatabase: UserDatabase,
	postedEvent: PostedEvent,
	commentReducer: CommentReducer
});

export default AllReducers;