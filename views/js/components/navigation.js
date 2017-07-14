import React from 'react';
import {Link} from 'react-router';


export default function Navigation(props) {
  return (
    <div className="nav">
      <ul>
        <li className="nav__brand"><Link to="/app/home">Musico</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/app/profile">Account</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/app/postevents" >Create</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/app/events" >Events</Link></li>
        <li className="nav__item"><a href="api/user/auth/logout">Logout</a></li> 
      </ul>
    </div>
  );
}