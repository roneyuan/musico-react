import React from 'react';


export default function PastEvent(props) {
  return (
    <div className="content__event">
      <div className="content__event__name">{ props.name }</div>
      <div className="content__event__tag">Tag: { props.tag }</div>
      <div className="content__event__price">Price: { props.price }</div>
      <div className="content__event__location">Location: { props.location }</div>
      <div className="content__event__time">Time: { props.time }</div>              
      <div className="content__event__expectation">
        Does the event meet your expectation?
        <button className="btn__survey" onClick={props.clickYes}> Yes </button> 
        <button className="btn__survey" onClick={props.clickNo}> No </button>
      </div>
      <div className="content__event__comment">
          <div>Comment:</div>
          <div>
            <textarea name="comment" className="content__event__commentbox" maxLength="120" placeholder="120 maximum character"></textarea>
          </div>
          <div>
            <button onClick={props.eventClick} className="btn__rsvp"> Submit </button>
          </div>
      </div>      
    </div>
  );
}