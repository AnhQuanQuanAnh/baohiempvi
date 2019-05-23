import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ContactBar extends Component {
	constructor(props) {
		super();

		this.state = {
			isOpen: true,
		};
	}

	render() {
		return (
			<div className={`theme-colors ${this.state.isOpen ? 'shown' : ''}`}>
				<div className="p-4">
					<div className="d-flex flex-row justify-content-between mb-4">
						<h4>Hotline:<span className="text-danger font-weight-bold"> 0962480094</span></h4>
					</div>
					<NavLink to="/lien-he">
						<h3 className="text-danger font-weight-bold">
							Hoặc liên hệ qua email
						</h3>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default ContactBar;

