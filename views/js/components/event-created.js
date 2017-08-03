import React from 'react';


export default function EventCreated(props) {
  let comment = props.comments.map((comment, index) => 
    <li>{comment}</li>
  )
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
      <div className="content__event__expectation">
        <div>Expectation Rate:</div>
        <div>
          <span className="separtor"> Yes: {props.expectedPositive} </span>
          <span className="separtor"> No: {props.expectedNegative} </span>
        </div>
      </div>
      <div className="content__event__viewComments">
        <div> Comments: </div>
        <div>
        { comment }
        </div>
      </div>      
    </div>
  );
}