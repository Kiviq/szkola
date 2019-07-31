import React, { Component } from 'react';
import Banner from '../Banner/Banner.js';
import Courses from '../Courses/Courses.js';
class Home extends Component {
	render() {
		return (
			<div>
			<Banner/>
			<Courses />
			</div>
		);
	}
}
export default Home;