import React, { Component } from 'react';
import Navigation from './navigation';
import { toggleNavebar } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
	/* How??? Why cant I use function? */
	render() {
		// console.log(this.props) // Where is the props came from??
		// console.log("NAV", this.props.checked)
		return(
			<div>			
				<div>
					<Navigation toggleNavbar={() => this.props.toggleNavebar() } 
											checked={this.props.checked } />				
				</div>
				<div className="app__title">					
					<div>
						<h1> Musico </h1>
						<h3> find what you love, </h3>
						<h3> find what you enjoy, </h3>
						<h3> find the music that you love and enjoy </h3>
					</div>
				</div>			
				<div className="content">
					<div className="welcome"></div>
					{ this.props.children } 
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log("TEST")
	return {
		checked: state.navigationReducer.checked,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ toggleNavebar }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);