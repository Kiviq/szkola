import React, { Component } from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
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