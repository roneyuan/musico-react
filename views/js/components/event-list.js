import React from 'react';
import Event from './event';

export default function EventList(props) {
	return (
		<div className='event-list'>
			<Event name="Piano Convert"
						 tag="Piano"
						 price="0"
						 description="Hello"
						 location="NY" />
			<Event name="Violin Convert"
						 tag="Violin"
						 price="10"
						 description="World"
						 location="NY" />
			<Event name="Auto Convert"
						 tag="auto"
						 price="0"
						 description="Hey"
						 location="NY" />						 						 
		</div>
	);		
}