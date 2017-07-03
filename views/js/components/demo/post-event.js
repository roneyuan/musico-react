import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { demoPostEvent } from '../../actions/demo/index';
import Event from './event';


class PostEvent extends Component {
  render() {
    return (
      <div className="content__post-event">
      	<form onSubmit={(event) => {
      		event.preventDefault();

      		let name = event.target.name.value;
      		let description = event.target.description.value;
      		let price = event.target.price.value;
      		let tag = event.target.tag.value;
      		let location = event.target.location.value;
          

      		this.props.dispatch(demoPostEvent(name, price, description, location, tag));
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
  )}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ demoPostEvent }, dispatch)
}


export default connect(matchDispatchToProps)(PostEvent);