import React from 'react';


export default function Event(props) {
  return (
    <div className="event">
      <div className="event-name">{props.name}</div>
      <div className="event-description">
          Description: {props.description}
      </div>
      <div className="event-tag">Tag: {props.tag}</div>
      <div className="event-price">Price: {props.price}</div>
      <div className="event-location">Location: {props.location}</div>
      <div className="event-button">
        <button onClick={props.eventClick} className="event-rsvp">{ props.cancel || 'RSVP' }</button>
      </div>
    </div>
  );
}