import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { demoPostEvent, newPostForm } from '../../actions/demo/index';
// import { browserHistory } from 'react-router';


class PostEvent extends Component {
  render() {
    let content;
    console.log(this.props.events)
    if (this.props.events.length === 0) {
      content = <div className="content__post-event">
        <form onSubmit={(event) => {
          event.preventDefault();

          let name = event.target.name.value;
          let description = event.target.description.value;
          let price = event.target.price.value;
          let tag = event.target.tag.value;
          let location = event.target.location.value;
          

          this.props.demoPostEvent(name, price, description, location, tag);

          // browserHistory.push('/app/events');
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
    } else {
      content = <div>POSTED <button onClick={() => this.props.newPostForm()} className="btn___submit"> Create </button></div>;
    }

    console.log(content)
    return (content

  )}
}

function mapStateToProps(state) {
  console.log(state);
  return {
    events: state.eventsDatabase.events
  }
}

function matchDispatchToProps(dispatch) {
  // console.log("DIS", dispatch)
  return bindActionCreators({ demoPostEvent, newPostForm }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(PostEvent);