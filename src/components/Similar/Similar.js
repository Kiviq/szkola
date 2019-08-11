import React, { Component } from 'react';
import JsonData from '../../data.json';
import Similar_product from './Similar_product/Similar_product.js';
import styles from './styles.css';
class Similar extends Component {
	
	render() {
		const renderSimilar = JsonData.courses.map((el, ind) =>{
			if (el.url != window.location.pathname){
				return <Similar_product key={ind} name={el.name} handle={el.handler} url={el.url} format={el.fileFormat}/>
			}
		})
		return (
			<div className="similar_cont">
				<h3>
					Sprawdź także inne kursy:
				</h3>
				{renderSimilar}
			</div>
		);
	}
}

export default Similar;