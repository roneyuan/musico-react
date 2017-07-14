import React from 'react';
import { Link } from 'react-router';


export default function Navigation(props) {
  return (
    <div className="nav">
      <ul>
        <li className="nav__brand"><Link to="/demo/home">Musico</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/demo/profile">Account</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/demo/postevents" >Create</Link></li>
        <li className="nav__item"><Link activeStyle={{ color: '#63ccff' }} to="/demo/events" >Events</Link></li>
      </ul>
    </div>
  );
}