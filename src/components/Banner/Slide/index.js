import React, { Component } from 'react';
import BannerImg from '../../../media/banner.jpg';
import styles from './styles.css';

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

				<a href={this.props.url} className="slide_button" >Sprawdź</a>
			</div>
		);
	}
}

export default Slide;