import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Similar_product extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	render() {
		console.log(this.props, window.scrollY)
		return (
			<div className="similar_course">
				
				<div className="similar_course_img">
					<img src={require('../../../media/'+this.props.handle+'.'+this.props.format)} alt={this.props.name}/>
				</div>
				<h3>
					{this.props.name}
				</h3>
					<Link to={this.props.url}> Sprawdź </Link>
			</div>
		);
	}
}
 export default Similar_product;
