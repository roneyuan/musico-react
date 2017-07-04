import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from '../event';
import { demoGetUserProfile, demoCancelRsvp, demoCancelEvent } from '../../actions/demo/index';


class Profile extends Component {

  componentWillMount() {
    this.props.demoGetUserProfile();
  }

  render() {
    let rsvpList;
    let createdList;
    

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
                 eventClick={() => this.props.demoCancelRsvp(event)} />
        </div>
      )
    }

    if (this.props.user.eventsCreated) {
      createdList = this.props.user.eventsCreated.map((event, index) => 
        <div className="content__event-box" key={index}>
          <Event name={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 cancel={ "Cancel" } 
                 buttonEvent={ "btn__cancel" }                
                 eventClick={() => this.props.demoCancelEvent(event)} />
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
  return bindActionCreators({ demoGetUserProfile, demoCancelRsvp, demoCancelEvent }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);