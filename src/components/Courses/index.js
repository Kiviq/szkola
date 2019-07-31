import React, { Component } from 'react';
import JsonData from '../../data.json';
import Course from './Course';
class Courses extends Component {
	render() {
		const renderCourses = JsonData.home_banner.slides.map((el, ind)=>{
			console.log(el)
			return <Course key={ind} url={el.url} name={el.name}/>
		})
		return (
			<div className="courses">

			</div>
		);
	}
}

export default Courses;