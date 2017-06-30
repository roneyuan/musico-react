import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from './event';
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
        <div className="col-4" key={index}>
          <Event key={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 cancel={ "Cancel" } 
                 eventClick={() => this.props.demoCancelRsvp(event)} />
        </div>
      )
    }

    if (this.props.user.eventsCreated) {
      createdList = this.props.user.eventsCreated.map((event, index) => 
        <div className="col-4" key={index}>
          <Event key={ event.name }
                 tag={ event.tag }
                 description={ event.description }
                 price={ event.price}
                 location={ event.location }
                 cancel={ "Cancel" } 
                 eventClick={() => this.props.demoCancelEvent(event)} />
        </div>
      )
    }

    return (
      <div className='user-profile'>
        <div className="col-12">
          <div className="profile-username"> Username: { this.props.user.username } </div>
          <div className="profile-nickname"> Nickname: { this.props.user.nickname } </div>
          <div className="profile-rsvp"> RSVP : <div> { rsvpList } </div> </div>
          <div className="profile-eventsCreated"> Created : <div> { createdList } </div> </div>
        </div>                  
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