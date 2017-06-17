import React from 'react';
import ReactDOM  from 'react-dom';
import EventList from './components/event-list';
import PostEvent from './components/post-event';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Event from './components/event';
import store from './store';
import {Router, Route, hashHistory} from 'react-router';

const routes = (
	<Provider store={store}>
		<Router histroy={hashHistory}>
			<Route path="/events" component={EventList} />
			<Route path="/postevents" component={PostEvent} />		
		</Router>
	</Provider>
)



document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
  <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/events" component={EventList} />
			<Route path="/postevents" component={PostEvent} />		
		</Router>
	</Provider>,
  document.getElementById('app'))
); 