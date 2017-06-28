import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getToken} from '../actions/index';


class Login extends Component {
  render() {
    return (
      <div className="land-button">
        <button className="google-button"><a href="user/auth/google">Login</a></button>
      </div>
  )}
}

// Call a function
function mapDispatchToProps(dispatch) {
	return bindActionCreators({getToken: getToken}, dispatch)
}


export default connect(null, mapDispatchToProps)(Login);