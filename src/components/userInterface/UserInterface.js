import React from 'react';

export default class UserInterface extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="menu-wrap">
				<div className="dialog">
					<div className="dialog-message">
						It's super-effective!
					</div>
					<div className="ability-menu">
						<div className="option"></div>
						<div className="option"></div>
						<div className="option"></div>
						<div className="option"></div>
					</div>
					<div className="select-menu">
						<div className="option"></div>
						<div className="option"></div>
						<div className="option"></div>
						<div className="option"></div>
					</div>
				</div>
			</div>
		)
	}
}