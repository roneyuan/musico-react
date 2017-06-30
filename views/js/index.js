import React from 'react';
import ReactDOM  from 'react-dom';
import EventList from './components/event-list';
import PostEvent from './components/post-event';
import Registration from './components/registration';
import Login from './components/login'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Event from './components/event';
import Navigation from './components/navigation'
import store from './store';
import {Router, Route, hashHistory} from 'react-router';
import Profile from './components/profile'
import App from './components/app';
import Home from './components/home';


// How do I get rid of pound sign?
const routes = (
  <Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Login} />
			<Route path='/app' component={App}>
				<Route path="/home" component={Home} />
				<Route path="/events" component={EventList} />
				<Route path="/postevents" component={PostEvent} />		
				<Route path="/profile" component={Profile} />		
			</Route>
			<Route path='/demo' component={App}>
				<Route path="/events" component={EventList} />
				<Route path="/postevents" component={PostEvent} />		
				<Route path="/profile" component={Profile} />		
			</Route>			
			<Route path='/login' component={Login} />
			<Route path='/register' component={Registration} />	
		</Router>
	</Provider>
)

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
		routes, document.getElementById('app')
	)
); 