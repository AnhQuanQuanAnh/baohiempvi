import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ColorSwitcher extends Component {
	constructor(props) {
		super();

		this.toggle = this.toggle.bind(this);
		this.changeThemeColor = this.changeThemeColor.bind(this);
		this.addEvents = this.addEvents.bind(this);
		this.removeEvents = this.removeEvents.bind(this);
		this.handleDocumentClick = this.handleDocumentClick.bind(this);
		this.getContainer = this.getContainer.bind(this);

		this.state = {
			isOpen: true,
			selectedColor:localStorage.getItem('themeColor')
		};
	}

	getContainer() {
		return ReactDOM.findDOMNode(this);
	}

	toggle(e) {
		e.preventDefault();
		const isOpen = this.state.isOpen;
		if (!isOpen) {
			this.addEvents();
		} else {
			this.removeEvents();
		}
		this.setState({
			isOpen: !isOpen
		})
	}
	changeThemeColor(e, color) {
		e.preventDefault();
		localStorage.setItem('themeColor', color)
		this.toggle(e);
		setTimeout(()=>{
			window.location.reload();
		},500)
	}

	componentWillMount() {
		this.removeEvents();
	}


	addEvents() {
		['click', 'touchstart'].forEach(event =>
			document.addEventListener(event, this.handleDocumentClick, true)
		);
	}
	removeEvents() {
		['click', 'touchstart'].forEach(event =>
			document.removeEventListener(event, this.handleDocumentClick, true)
		);
	}

	handleDocumentClick(e) {
		const container = this.getContainer();
		if ((container.contains(e.target) || container === e.target)) {
			return;
		}
		this.toggle(e);
	}

	render() {
		const selectedColor = this.state.selectedColor
		return (
			<div className={`theme-colors ${this.state.isOpen ? 'shown' : ''}`}>
				<div className="p-4">
					<div className="d-flex flex-row justify-content-between mb-4">
						<h4>Hotline: 0962480094</h4>
					</div>
				</div>
				<a href="#" className="theme-button" onClick={this.toggle} > <i className="simple-icon-phone"></i> </a>
			</div>
		);
	}
}

export default ColorSwitcher;

