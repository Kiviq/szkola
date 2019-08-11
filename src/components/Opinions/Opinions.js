import React, { Component } from 'react';
import JsonData from '../../data.json';
import Opinion from './Opinion/Opinion.js';
import styles from './styles.css';
class Opinions extends Component {
	constructor(){
		super()
		this.state = {
			activeSlides: 1,
			timeToShow: false
		}
	}
	initialize(){

	}
	opRef = React.createRef();
	
	componentDidMount(){
		this.sliderInit()
	}
	sliderInit = () => {
		let opinions = [].slice.call(this.opRef.current.querySelectorAll('.opinion:not(.dummy)'));
		const slideInit = () =>{
			let changed = opinions[2].classList.contains('active');
				if (changed){
					opinions[0].classList.add('active')
					opinions[1].classList.add('active')
					opinions[2].classList.remove('active')
					opinions[3].classList.remove('active')
				} else{
					opinions[0].classList.remove('active')
					opinions[1].classList.remove('active')
					opinions[2].classList.add('active')
					opinions[3].classList.add('active')
				}
			setTimeout(()=>{
				slideInit();
			}, 5500)
		}
		slideInit();
	}


	renderOpinions = JsonData.opinions.map((el, ind)=>{
			return <Opinion key={ind} who={el.who} side={ind % 2 === 0 ? 'left' : 'right'} content={el.content} stars={el.stars} dummy={el.who.toLowerCase() === 'dummy' ? true : false}/>
	})
	render() {
		return (
			<div className="opinions" ref={this.opRef}>
			<div className="header">
				<h3>
				Opinie naszych uczniów
				</h3>
			</div>
			<div className="op_cont">
				{this.renderOpinions}
			</div>
			</div>
		);
	}
	
}

export default Opinions;