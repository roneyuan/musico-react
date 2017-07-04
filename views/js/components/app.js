import React, { Component } from 'react';
import Navigation from './navigation';


class App extends Component {
	/* How??? Why cant I use function? */
	render() {
		// console.log(this.props) // Where is the props came from??
		return(
			<div>
				<div className="app__title">
					<h1> Musico </h1>
					<h3> find what you love, </h3>
					<h3> find what you enjoy, </h3>
					<h3> find the music that you love and enjoy </h3>
				</div>			
				<div className="content">
					<Navigation />
					<div className="welcome"></div>
					{ this.props.children } 
				</div>
			</div>
		)
	}
}


export default App;