import React from 'react';


export default function Event(props) {
  return (
    <div className="content__event">
      <div className="content__event__name">{ props.name }</div>
      <div className="content__event__description">
        { props.description }
      </div>
      <div className="content__event__tag">Tag: { props.tag }</div>
      <div className="content__event__price">Price: { props.price }</div>
      <div className="content__event__location">Location: { props.location }</div>
      <div className="content__event__time">Time: { props.time }</div>      
      <div className="content__event__button">
        <button onClick={ props.eventClick } className={ props.buttonEvent } disabled={ props.ifRsvp }>{ props.cancel || 'RSVP' }</button>
        <span className="content__event__notice"> { props.notice } </span>
      </div>
      <div className="content__event__numberOfRsvp">
        {props.numberOfRsvp} people are going
      </div>        
      <div className="content__event__expectation">
        Does the event meet your expectation?
        <button className="btn__survey" onClick={props.clickYes}> Yes </button> 
        <button className="btn__survey" onClick={props.clickNo}> No </button>
      </div>
      <div className="content__event__expectation">
        <span className="separtor"> Yes: {props.expectedPositive} </span>
        <span className="separtor"> No: {props.expectedNegative} </span>
      </div>
    </div>
  );
}