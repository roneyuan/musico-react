import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import * as reducers from './reducers/index';
import Event from './component/event'
import allReducers from './reducers';

const store = createStore(allReducers);


export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));