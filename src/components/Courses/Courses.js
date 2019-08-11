import React, { Component } from 'react';
import JsonData from '../../data.json';
import Course from './Course/Course.js';
import styles from './styles.css';
import { Link } from 'react-router-dom';
class Courses extends Component {
	moreClass = () => {
		if (JsonData.courses.length - 1 > 2){
			return ('more_button hidden')
		} else{
			return ('more_button')
		}
	}
	renderCourses = JsonData.courses.map((el, ind) =>{
		if (ind < 2){
			return <Course key={ind} title={el.name} description={el.descritpion} url={el.url} perks={el.perks} handle={el.handler} side={ind % 2 == 0 ? 'left' : 'right'} />
		} 

	})
	render() {
		return (
			<div className="courses">
			<h3>
			Nasze kursy
			</h3>
				{this.renderCourses}
				<div className="moreSection">
					<h3>
						A to nie koniec!
					</h3>
					<p>
						Przejdź na stronę wszystkich kursów aby dowiedzieć się więcej!
					</p>
					<Link to="/kursy" className={this.moreClass()}>Zobacz więcej</Link>
				</div>

			</div>
		);
	}
}

export default Courses;