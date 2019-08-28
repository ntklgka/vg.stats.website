import React, { Component } from 'react';
import '../App.css';
import Table1 from './Table1';
import Navbar1 from './Navbar';

class App extends Component {
	
	constructor() {
		super();
		
		this.state = {
			threads: [],
		};
	}
	
	componentDidMount() {
		fetch('http://127.0.0.1:3050/dev/api/recent')
		.then(response => response.json())
		.then(threads => this.setState({ threads }));
	}
	
	render() {
		return (
			<div>
				<Navbar1/>
				<div className="Table">
					<Table1 threads = {this.state.threads.data}/>
				</div>
			</div>
		);
	}
}

export default App;