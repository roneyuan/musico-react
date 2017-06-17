import React from 'react';
import ReactDOM  from 'react-dom';
import EventList from './components/event-list';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Event from './components/event';
import store from './store';


document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
  <Provider store={store}>
  	<EventList />
  </Provider>,
  document.getElementById('app'))
); 