import React from 'react';


export default function Home() {
  return (
    <div className="content__home">
    	<div className="content__home__message">
    		<div>Welcome to  Musico. You can start browse the application by clicking the menu bar above.<p></p></div>
    		<div>About us: <p></p></div>
    		<div>
    			Musico is dedicated to help the people who love music and want to let more people know about their music.
    			<br />
    			Also, we provides a platform so that everyone can know where and when are those musicians going to perform.
    			<p></p>
    		</div>
            <div>FAQ <p></p></div>
            <div className="content__home__message--question">How do I create an event?</div>
            <div className="content__home__message--answer">Click "Event" tab above, then you can start create an event.<p></p></div>
            <div className="content__home__message--question">Can I cancel the event that I reserverd or created?</div>
            <div className="content__home__message--answer">Of course! Just go to "Account" tab, then you can cancel the event you reserverd or created. <p></p></div>
            <div className="content__home__message--question">Can I leave a comment for the event?</div>
            <div className="content__home__message--answer">Go to "Account" tab, and you can see there is a "Comment" button in the "Past" session. </div>
    	</div>
    </div>
  )
}