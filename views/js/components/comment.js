import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postComment } from '../actions/index';
import * as Cookies from 'js-cookie';


class Comment extends Component {
  render() {
		return  (     
			<div className="content__event__comment">
          <div>Event: { this.props.title}</div>
          <div>
            <textarea name="comment" className="content__event__commentbox" maxLength="120" placeholder="120 maximum character"></textarea>
          </div>
          <div>
            <button className="btn__rsvp"> Submit </button>
            <button className="btn__cancel"> Cancel </button>            
          </div>
      </div> 
    )
	}
}

function mapStateToProps(state) {
  // console.log("COMMENT", state)
  return {
    comment: state.commentReducer.comment
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ postComment }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Comment);