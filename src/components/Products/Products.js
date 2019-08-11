import React, { Component } from 'react';
import Product from './Product/Product.js';
import JsonData from '../../data.json';
import Banner from '../Banner/Banner.js';
import styles from './styles.css'
class Products extends Component {
	renderProducts = JsonData.courses.map((el, ind) =>{
		return <Product key={ind} title={el.name} description={el.descritpion} url={el.url} perks={el.perks} handle={el.handler} side={ind % 2 == 0 ? 'left' : 'right'} />
	})
	render() {
		return (
			<div className="course_page">
				<Banner source={JsonData.courses_banner.slides} destination='products'/>
				<div className="header">
					<h1> Nasze Kursy </h1>
				</div>
				<div className="content">
					{this.renderProducts}
				</div>
			</div>
		);
	}
}

export default Products;