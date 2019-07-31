import React, { Component } from 'react';
import Banner from '../Banner';
import Courses from '../Courses';
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