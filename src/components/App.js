import React, { Component } from 'react';
import TableContainer from './TableContainer';
import Navbar1 from './Navbar';

class App extends Component {
	
	constructor() {
		super();
		
		this.state = {
			threads: [],
		};
	}
	
	componentDidMount() {
		fetch('https://vgstats.xyz/dev/api/recent')
		.then(response => response.json())
		.then(threads => this.setState({ threads }));
	}
	
	render() {
		return (
			<div>
				<Navbar1/>
				<TableContainer threads = {this.state.threads.data}/>
			</div>
		);
	}
}

export default App;