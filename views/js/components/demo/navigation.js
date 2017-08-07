import React from 'react';
import {Link} from 'react-router';


export default function Navigation(props) {
  return (
    <div className="nav">
      <input type="checkbox" id="navbar" checked={props.checked} />
      <label onClick={ props.toggleNavbar } htmlFor="navbar"></label>
      <ul>
        <li className="nav__brand"><Link onClick={ props.toggleNavbar } to="/demo/home">Musico</Link></li>
        <li className="nav__item"><Link onClick={ props.toggleNavbar } activeStyle={{ color: '#63ccff' }} to="/demo/profile">Account</Link></li>
        <li className="nav__item"><Link onClick={ props.toggleNavbar }  activeStyle={{ color: '#63ccff' }} to="/demo/postevents" >Create</Link></li>
        <li className="nav__item"><Link onClick={ props.toggleNavbar }  activeStyle={{ color: '#63ccff' }} to="/demo/events" >Events</Link></li>
      </ul>
    </div>
  );
}