import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';
import styles from './style.css';
class Header extends Component {
	render() {
		return (
			<nav className="nav">
				<Logo/>
				<Nav />
			</nav>
		);
	}
}

export default Header;