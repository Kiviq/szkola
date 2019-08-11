import React, { Component } from 'react';
import star_empty from '../../../media/star.png';
import star_full from '../../../media/star_a.png';

let array = [];
let stars;
class Opinion extends Component {
	constructor(props){
		super(props);
		this.state = {
			array:[]
		}
	}
	createStars(){
		array = [];
		let type;
		for (var i = 0; i <= 5; i++) {
			if (i < this.props.stars){
				array.push(<img key={i} src={star_full} alt="star"/>)
			} else{
				//Tutaj pusta
				array.push(<img key={i} src={star_empty} alt="star"/>)
			}
		}
		return array
	}

	activeSlide(){
		console.log()
		let isDummy = this.props.dummy ? 'dummy' : '';
		return `opinion ${isDummy} ${this.props.side}`
	}
	render() {
		return (
			<div className={this.activeSlide()} >
				<div className="opinion_who">
					<h5>{this.props.who}</h5>
				</div>
				<div className="opinion_img">
					<img src={require('../../../media/vader.jpeg')} alt=""/>
				</div>
				<p className="opinion_content">
				{this.props.content}
				</p>
				<div className="stars">
					{this.createStars()}
				</div>
			</div>
		);
	}
}

export default Opinion;