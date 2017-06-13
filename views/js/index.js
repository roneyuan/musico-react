import React from 'react';
import ReactDOM  from 'react-dom';

import EventList from './components/event-list';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import * as reducers from './reducers/index';
import Event from './components/event'
import allReducers from './reducers';

const store = createStore(allReducers);

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
  <Provider store={store}>
  	<EventList />
  </Provider>,
  document.getElementById('app'))
); 