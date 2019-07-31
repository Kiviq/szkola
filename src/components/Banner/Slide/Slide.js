import React, { Component } from 'react';
import BannerImg from '../../../media/banner.jpg';
import styles from './styles.css';
import { Link } from 'react-router-dom';

class Slide extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="slide">
				<img src={BannerImg} alt={this.props.title}/>
				<h3 className="slide_headline">
					Lorem ipsum
				</h3>

				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat vestibulum velit, at posuere mauris molestie eu. Pellentesque maximus iaculis pellentesque. 
				</p>

				<Link to={this.props.url} className='slide_button'>Sprawdź </Link>
			</div>
		);
	}
}

export default Slide;