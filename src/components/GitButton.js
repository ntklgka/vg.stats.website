import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

class GitButton extends Component {
	render() {
		const style = {
			fontSize : '22px',
			marginTop: '2px'
		};
		return (
			<div className ="git-btn">
				<Button variant="success" href="https://github.com/ntklgka/vg.stats.scraper" target="_blank"><FontAwesomeIcon icon={faGithub} style={style}/></Button>
			</div>
		);
	}
}

export default GitButton;