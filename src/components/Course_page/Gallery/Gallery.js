import React, { Component } from 'react';
import image from '../../../media/polish.jpeg';
class Gallery extends Component {
	render() {
		return (
			<div className="course_page_gallery">
				<ul>
					<li className="gallery_img">
						<img src={image} alt="image"/>
					</li>
				</ul>
			</div>
		);
	}
}

export default Gallery;