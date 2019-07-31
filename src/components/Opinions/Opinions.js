import React, { Component } from 'react';
import JsonData from '../../data.json';
import Opinion from './Opinion/Opinion.js';
class Opinions extends Component {
	renderOpinions = () =>{
		let elements = JsonData.opinions.map((el, ind)=>{
			return <Opinion index={ind} key={ind} who={el.who} content={el.content} stars={el.stars}/>
		})
	}
	render() {
		return (
			<div>
			{this.renderOpinions()}
			</div>
		);
	}
}
export default Opinions;