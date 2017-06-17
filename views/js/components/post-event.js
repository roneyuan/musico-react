import React from 'react';


export default function PostEvent(props) {
  return (
    <div className="post-event">
    	<form onSubmit={(event) => {
    		event.preventDefault();

    		let name = event.target.name;
    		let description = event.target.description;
    		let price = event.target.price;
    		let tag = event.target.tag;
    		let location = event.target.location;

    		this.props.dispatch();
    	}}>
    	<div className="form-contol">
    		<label> Name: </label>
    		<input type="text" name="name" />
    	</div>
    	<div className="form-contol">
    		<label> Location: </label>
    		<input type="text" name="location" />
    	</div>
    	<div className="form-contol">
    		<label> Price: </label>
    		<input type="text" name="price" />
    	</div>
    	<div className="form-contol">
     		<label> Description: </label>
    		<input type="text" name="description" />
    	</div>
    	<div className="form-contol">
    		<label> Tag: </label>
    		<input type="text" name="tag" /> 
    	</div>
    	<div className="form-contol">   		   		    		    		
    		<button>Submit</button>
    	</div>
    	</form>
    </div>
  );
}