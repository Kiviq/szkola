import React, { Component } from 'react';
import JsonData from '../../data.json';
import Slide from './Slide/Slide.js';
import styles from './styles.css';
class Banner extends Component {
	render() {
		const listItems = JsonData.home_banner.slides.map((el, ind)=>{
			return <Slide key={ind} url={el.url} image={el.image} name={el.name}/>
		})
		return (
			<div className="home_banner">
			{listItems}
			</div>
		);
	}xw
}

export default Banner;