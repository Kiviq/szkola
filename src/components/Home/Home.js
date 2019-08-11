import React, { Component } from 'react';
import Banner from '../Banner/Banner.js';
import Courses from '../Courses/Courses.js';
import About from '../About/About.js';
import JsonData from '../../data.json';
import Opinions from '../Opinions/Opinions.js';
class Home extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	render() {
		return (
			<div>
			<Banner source={JsonData.home_banner.slides} destination='home'/>
			<About/>
			<Courses />
			<Opinions/>
			</div>
		);
	}
}
export default Home;