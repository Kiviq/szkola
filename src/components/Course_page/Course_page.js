import React, { Component } from 'react';
import JsonData from '../../data.json';
import Gallery from './Gallery/Gallery.js';
import styles from './styles.css';
import Similar from '../Similar/Similar.js';
let courseFound = false;
let element;
class Course_page extends Component {
	constructor(){
		super()
	}
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	render() {
	const chooseCourse = JsonData.courses.map((el)=>{
		if (el.url == window.location.pathname && !courseFound){
			element = el
		}
	})
	const renderPerks = element.perks.map((el, ind)=>{
		return (<li key={ind} className="perk"><img src={require('../../media/checked.png')} alt="checked" className="point" /> {el}</li>);
	})
		console.log(window.location.pathname)
		return (
			<div className="course_page">
			{chooseCourse}
				<h1>
					{element.name}
				</h1>
				<div className="course_page_desc">
					<p>
						{element.descritpion}
					</p>
				</div>
				<div className="course_page_double">
					<div className="course_page_perks">
						<h3> Dlaczego nasze kursy:</h3>
						<ul>
							{renderPerks}
						</ul>
					</div>
					<Gallery/>
				</div>
				<Similar chosen={element}/>
			</div>
		);
	}
}
export default Course_page;