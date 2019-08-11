import React, { Component } from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';
class Slide extends Component {
	constructor(props){
		super(props)
	}
	addColor(){
		return `background:${this.props.bgColor}`
	}
	render() {
		return (
			<div className="slide">
				<div className="slide_curtain" style={{background:this.props.bgColor}}>
				</div>
				<img src={require('../../../media/'+this.props.image+'.'+this.props.file_format)} alt={this.props.title}/>
				<h3 className="slide_headline">
					{this.props.name}
				</h3>

				<p>
				{this.props.desc}
				</p>

				<Link to={this.props.url} className='slide_button'>Sprawdź </Link>
			</div>
		);
	}
}

export default Slide;