import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

class ReloadBtn extends Component {
	constructor() {
		super();
		this.refreshPage = this.refreshPage.bind(this);
	}
	
	refreshPage() {
		window.location.reload(); 
	}
	
	render() {
		const style = {
			marginRight: '12px'// inline style example
		};
		return (
			<div className ="rld-button">
				<Button variant="success" onClick={this.refreshPage}><FontAwesomeIcon icon={faSyncAlt} style={style}/>
					Refresh
				</Button>
			</div>
		);
	}
}

export default ReloadBtn;
