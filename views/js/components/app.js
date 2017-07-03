import React, { Component } from 'react';
import Navigation from './navigation';


class App extends Component {
	/* How??? Why cant I use function? */
	render() {
		// console.log(this.props) // Where is the props came from??
		return(
			<div className="content">
				<Navigation />
				{ this.props.children } 
		</div>
		)
	}
}


export default App;