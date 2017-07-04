import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from './event';
import { getUserProfile, cancelRsvp, cancelEvent } from '../actions/index';
import * as Cookies from 'js-cookie';

class Profile extends Component {

  componentWillMount() {
    const accessToken = Cookies.get('accessToken');
    this.props.getUserProfile(accessToken, this.props.user.username);
  }

  render() {
    let rsvpList;
    let createdList;
    
    const accessToken = Cookies.get('accessToken');

    if (this.props.user.eventsRsvp) {
      rsvpList = this.props.user.eventsRsvp.map((event, index) => 
        <div className="content__event-box" key={index}>
          <Event name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 cancel={ "Cancel" } 
                 buttonEvent={ "btn__cancel" }
                 eventClick={() => this.props.cancelRsvp(event, accessToken)} />
        </div>
      )
    }

    if (this.props.user.eventsCreated) {
      createdList = this.props.user.eventsCreated.map((event, index) => 
        <div className="content__event-box" key={ index }>
          <Event name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 cancel={ "Cancel" } 
                 buttonEvent={ "btn__cancel" }                 
                 eventClick={() => this.props.cancelEvent(event, accessToken)} />
        </div>
      )
    }

    return (
      <div className='content__profile'>
        <div className="content__profile__username"> Username: { this.props.user.username } </div>
        <div className="content__profile__nickname"> Nickname: { this.props.user.nickname } </div>
        <div className="content__profile__rsvp"> RSVP : <div> { rsvpList } </div> </div>
        <div className="content__profile__eventsCreated"> Created : <div> { createdList } </div> </div>             
      </div>      
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.userDatabase.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getUserProfile, cancelRsvp, cancelEvent }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);