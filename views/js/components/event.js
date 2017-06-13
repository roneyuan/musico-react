import React from 'react';

export default function Event() {
  const name = 'Concert';
  const imageUrl = 'https://scontent.cdninstagram.com/t51.2885-19/11377856_626372960798542_1396263462_a.jpg';
  const tag = "Piano"
  const description = 'Come here';
  const price = 0;
  const location = "NY";

  return (
    <div className="event">
      <div className="event-name">{name}</div>
      <img className="event-img" src={imageUrl} />
      <div className="event-description">
          Description: {description}
      </div>
      <div className="event-tag">Tag: {tag}</div>
      <div className="event-price">Price: {price}</div>
      <div className="event-location">Location: {location}</div>
    </div>
  );
}