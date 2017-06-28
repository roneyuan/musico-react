import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Event from './event';
import {getUserProfile, cancelRsvp, cancelEvent} from '../actions/index';
import * as Cookies from 'js-cookie';

class Profile extends Component {

  componentWillMount() {
    const accessToken = Cookies.get('accessToken');
    console.log("GET TOKEN", accessToken);
    this.props.getUserProfile(accessToken);
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
                 eventClick={() => this.props.cancelRsvp(event)} />
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
                 eventClick={() => this.props.cancelEvent(event)} />
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
  // console.log(state)
  return {
    user: state.userDatabase.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({getUserProfile, cancelRsvp, cancelEvent}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);