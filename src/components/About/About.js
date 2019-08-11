import React, { Component } from 'react';
import aboutImg from '../../media/about.jpg';
import styles from './styles.css';
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return (
			<div className="about">
				<h1>
				Kim jesteśmy
				</h1>
				<div className="content">
					<div className="image">
						<img src={aboutImg} alt="about"/>
					</div>
					<div className="text">
					<h3> Lorem ipsum sit </h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu condimentum magna, non sagittis erat. Sed auctor in sapien eget luctus. Suspendisse nec accumsan eros. In efficitur tristique sem, nec mattis nunc sodales a. Suspendisse arcu magna, ultrices vel tellus eu, faucibus vulputate felis. Nulla pulvinar nisi leo, tempor mattis diam tincidunt a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sagittis nibh at purus bibendum, sed tempor felis tempus. Nunc viverra justo ac enim bibendum, lacinia dignissim nisl malesuada.</p>


					<Link to='/o_nas' className='about_button'>Czytaj więcej </Link>
					<Link to='/kontakt' className='about_button write'>Napisz do nas</Link>
					</div>
					
				</div>
			</div>
		);
	}
}
export default About;