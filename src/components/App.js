import React, { Component } from 'react';
import '../App.css';
import TopToolbar from './TopToolbar';
import Table1 from './Table1';

class App extends Component {
	
	constructor() {
		super();
		
		this.state = {
			threads: [],
		};
	}
	
	componentDidMount() {
		fetch('http://127.0.0.1:3050/api/recent')
		.then(response => response.json())
		.then(threads => this.setState({ threads }));
	}
	
	render() {
		return (
			<div>
				<TopToolbar/>
				<div className="Table">
					<Table1 threads = {this.state.threads.data}/>
				</div>
			</div>
		);
	}
}

export default App;