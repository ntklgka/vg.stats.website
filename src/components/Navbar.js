import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

class Navbar1 extends Component {
	
	constructor() {
		super();
		this.refreshPage = this.refreshPage.bind(this);
	}
	
	refreshPage() {
		window.location.reload(); 
	}
	
	render() {
		const style = {
			marginRight: '6px'// inline style example
		};
		const style1 = {
			marginLeft: '20px'// inline style example
		};
		
		const gitstyle = {
			fontSize : '35px',
			color: 'rgb(23, 162, 184)'
		};
		
		const style2 = {
			marginBottom: '4px'
		};
		
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
					  <Button variant="outline-info" onClick={this.refreshPage}><FontAwesomeIcon icon={faSyncAlt} style={style}/>Refresh</Button>
					    <Navbar.Text style={style1}>
							Updated every 30 mins
						</Navbar.Text>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse className="justify-content-end">
						<Nav.Link href="https://github.com/ntklgka/vg.stats.tracker" target="_blank"><FontAwesomeIcon icon={faGithub} style={gitstyle}/></Nav.Link>
						<Navbar.Brand style={style2}>/vg/ stats</Navbar.Brand>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navbar1;