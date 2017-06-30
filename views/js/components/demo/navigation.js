import React from 'react';
import {Link} from 'react-router';


export default function Navigation(props) {
  return (
    <div className="app-navbar">
      <ul>
        <li className="brand"><Link to="/demo/home">Musico</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/demo/profile">Profile</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/demo/postevents" >Post</Link></li>
        <li className="menu"><Link activeStyle={{ color: 'red' }} to="/demo/events" >Events</Link></li>
      </ul>
    </div>
  );
}