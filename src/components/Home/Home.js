import React, { Component } from 'react';
import Banner from '../Banner/Banner.js';
import Courses from '../Courses/Courses.js';
import About from '../About/About.js';
import Opinions from '../Opinions/Opinions.js';
class Home extends Component {
	render() {
		return (
			<div>
			<Banner/>
			<About/>
			<Opinions/>
			<Courses />
			</div>
		);
	}
}
export default Home;