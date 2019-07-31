import React, { Component } from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

class Logo extends Component {
	render() {
		return (
			<div className="logo">
			<Link to="/">
				<span className="pro">
				Pro
				</span>
				<span className="edu">
				Edu
				</span>
			</Link>
			</div>
		);
	}
}
export default Logo;