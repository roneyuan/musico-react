import React from 'react';
import {Link} from 'react-router';


export default function Navigation(props) {
  return (
    <div className="app-navbar">
      <ul>
        <li className="brand"><Link to="/home">Musico</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/profile">Profile</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/postevents" >Post</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/events" >Events</Link></li>
        <li className="menu"><a href="api/user/auth/logout">Logout</a></li> 
      </ul>
    </div>
  );
}