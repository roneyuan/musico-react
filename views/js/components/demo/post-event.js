import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { demoPostEvent } from '../../actions/demo/index';


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

      	<div className="form-control">
      		<label> Name: </label>
      		<input type="text" name="name" />
      	</div>
      	<div className="form-control">
      		<label> Location: </label>
      		<input type="text" name="location" />
      	</div>
      	<div className="form-control">
      		<label> Price: </label>
      		<input type="text" name="price" />
      	</div>
      	<div className="form-control">
       		<label> Description: </label>
          <textarea type="text" name="description"></textarea>
      	</div>
      	<div className="form-control">
      		<label> Tag: </label>
      		<input type="text" name="tag" /> 
      	</div>
      	<div className="form-control">   		   		    		    		
      		<button className="btn__submit">Submit</button>
      	</div>
      	</form>
      </div>
  )}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ demoPostEvent }, dispatch)
}


export default connect(matchDispatchToProps)(PostEvent);