import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkFooter extends Component {
	constructor(props){
		super(props)
	}
	renderSublist = this.props.sublist.map((el, ind)=>{
		return (
			<li key={ind} className="sub_link">
				<Link to={el.url} >{el.name}</Link>
			</li>
		)
	})
	render() {
		return (
			<li>
				<Link to={this.props.url}>{this.props.name} </Link>
				<div className="sublist">
					<ul>
						{this.renderSublist}
					</ul>
				</div>
			</li>
		);
	}
}
export default LinkFooter;