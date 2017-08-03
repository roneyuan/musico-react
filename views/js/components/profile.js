import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from './event';
import EventCreated from './event-created';
import PastEvent from './past-event';
import { getUserProfile, cancelRsvp, cancelEvent } from '../actions/index';
import * as Cookies from 'js-cookie';
import Moment from 'moment';


class Profile extends Component {

  componentWillMount() {
    const accessToken = Cookies.get('accessToken'); // Get that from the state
    this.props.getUserProfile(accessToken, this.props.user.username);
  }

  render() {
    let rsvpList;
    let createdList;
    let pastEventList;
    
    const accessToken = Cookies.get('accessToken');

    if (this.props.user.eventsRsvp) {
      rsvpList = this.props.user.eventsRsvp.reverse().map((event, index) => 
        <div className="content__event-box" key={index}>
          <Event name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price }
                 location={ event.location }
                 numberOfRsvp={ event.numberOfRsvp }
                 time={ Moment(event.time).format('LLLL') }
                 cancel={ "Cancel" } 
                 buttonEvent={ "btn__cancel" }                 
                 eventClick={() => this.props.cancelEvent(event, accessToken)} />
        </div>        
      )
      // If time past
      pastEventList = this.props.user.eventsRsvp.reverse().map((event, index) =>
        <div className="content__event-box" key={index}>
          <PastEvent name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price }
                 location={ event.location }
                 numberOfRsvp={ event.numberOfRsvp }
                 clickYes={() => {
                  this.props.positiveExpectation(event._id, accessToken);
                 }}
                 clickNo={() => {
                  this.props.negativeExpectation(event._id, accessToken);
                 }}
                 time={ Moment(event.time).format('LLLL') }
                 cancel={ "Cancel" } 
                 buttonEvent={ "btn__cancel" }                 
                 eventClick={() => this.props.cancelEvent(event, accessToken)} />
        </div>      
      )      
    }

    if (this.props.user.eventsCreated) {
      createdList = this.props.user.eventsCreated.reverse().map((event, index) => 
        <div className="content__event-box" key={ index }>
          <EventCreated name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 time={ Moment(event.time).format('LLLL') }
                 numberOfRsvp={ event.numberOfRsvp }
                 expectedPositive={ event.expectedPositive }
                 expectedNegative={ event.expectedNegative }
                 comments={ ["123", "321"]}
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
        <div className="content__profile__past"> Past : <div> { pastEventList } </div> </div>
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