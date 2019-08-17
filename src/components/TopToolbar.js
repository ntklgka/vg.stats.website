import React, { Component } from 'react';
import ReloadBtn from './ReloadBtn';
import GitButton from './GitButton';
import StatusText from './StatusText';

class TopToolbar extends Component {
	render() {
		return (
			<div className="top-toolbar">
				<ReloadBtn/>
				<StatusText/>
				<GitButton/>
			</div>
		);
	}
}

export default TopToolbar;