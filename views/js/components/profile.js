import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Event from './event';
import {getUserProfile} from '../actions/index';

class Profile extends Component {

  componentWillMount() {
    // console.log("componentWillMount:", this.props)
    this.props.getUserProfile();
  }



  render() {
    return(
      <div className='user-profile'>
        <div className="col-12">
          <div className="profile-username">Username: {this.props.user.username}</div>
          <div className="profile-nickname">Nickname: {this.props.user.nickname}</div>
          <div className="profile-rsvp"> RSVP : {this.props.user.eventsRsvp} </div>
        </div>                  
      </div>      
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps:", state)
  return {
    user: state.userDatabase.user
  }
}

// Call a function
function matchDispatchToProps(dispatch) {
  return bindActionCreators({getUserProfile: getUserProfile}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);