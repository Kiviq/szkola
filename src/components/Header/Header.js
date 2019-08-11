import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';
import styles from './style.css';
import owl from '../../media/sowa.png';

class Header extends Component {
	setActive(ev){
		if (ev.target.classList.contains('active')){
			ev.target.classList.remove('active') 
			ev.currentTarget.parentNode.querySelector('.navigation').classList.remove('active');
		} else{
			ev.target.classList.add('active')
			ev.currentTarget.parentNode.querySelector('.navigation').classList.add('active');
		}
			
		// : 
			
	}
	render() {
		return (
			<nav className="nav">
			    <div className="lines"></div>
			    <div className="hamburger" onClick={this.setActive}>

				</div>
			    <div className="owl">
				    <img src={owl}/>
			    </div>
				<Logo/>
				<Nav />
			</nav>
		);
	}
}

export default Header;