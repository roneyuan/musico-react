import React from 'react';


export default function Navigation(props) {
  return (
    <div className="app-navbar">
      <ul>
        <li className="brand"><a href="/">Musico</a></li>
        <li className="menu"><a href="/#profile">Profile</a></li>
        <li className="menu"><a href="/#postevents">Post</a></li>
        <li className="menu"><a href="/#events">Events</a></li>
      </ul>
    </div>
  );
}