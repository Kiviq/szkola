import React, { Component } from 'react';
import Slide from './Slide/Slide.js';
import styles from './styles.css';
class Banner extends Component {
	constructor(props){
		super(props)
		this.state = {
			slides:[]
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.rotate()
		}, 300)
	}
	bannerContainer = React.createRef();
	rotate(){
		this.setState({
			slides:[].slice.call(this.bannerContainer.current.querySelectorAll('.slide'))
		})
		let count = 0,
			direction = 'forw';
		setInterval(()=>{
			if (count === this.state.slides.length - 1){
				direction = 'back'
			} 
			if (count === 0){
				direction = 'forw';
			}
			if (count < this.state.slides.length - 1 && direction === 'forw'){
				count++
				this.state.slides.forEach((el)=>{
					el.style.transform = `translate(${-100 * count}%, 0)`
				})
			} else{
				count--
				this.state.slides.forEach((el)=>{
					el.style.transform = `translate(${-100 * count}%, 0)`
				})
			}
			console.log(direction)
		}, 7500)
	}
	listItems = this.props.source.map((el, ind)=>{
		return <Slide key={ind} url={el.url} image={el.handle} file_format={el.fileFormat} name={el.title} desc={el.subtitle} bgColor={el.bg_color}/>
	})
	render() {
		
		return (
			<div className="full_banner" ref={this.bannerContainer}>
			{this.listItems}
			</div>
		);
	}xw
}

export default Banner;