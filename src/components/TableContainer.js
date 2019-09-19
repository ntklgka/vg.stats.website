import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table1 from './Table1';
import '../App.css';
import Row from 'react-bootstrap/Row';

class TableContainer extends Component {
	
	constructor() {
		super();
		
		this.state = {
			threads: [],
		};
		
	}
	
	loadData(){
		if (this.props.threads !== undefined){
			return (
				<Container>
					<div className = "Table">
						<Col sm></Col>
						<Col sm><Table1 threads = {this.props.threads}/></Col>
						<Col sm></Col>
					</div>
				</Container>
			);
		}
		else{
			return (
				<h1>Loading...</h1>
			);
		}
	}
	
	render() {
		return (
			this.loadData()
		);
	}
}

export default TableContainer;