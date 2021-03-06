import React, { Component } from 'react';

class Course extends Component {
	constructor(props){
		super(props)
	}
	giveClass(ele){
		let classes;
		if (ele == 'content'){
			classes = `product_content ${this.props.side}`;
		} else{
			classes = `product_background ${this.props.side == 'left' ? 'right' : 'left'}`;
		}
		return (classes)
	}
	render() {
		let name = this.props.handle;
		return (
			<div className="product course">
				<div className={this.giveClass('content')}>
					<h3>
						{this.props.title}
					</h3>
					<p className="description">
						{this.props.description}
					</p>
						<a href={this.props.url} className="go_to_course"> Czytaj więcej</a>
					
				</div>
				<div className={this.giveClass()} >
					<img src={require('../../../media/'+name+'.jpeg')} alt={name}/>
				</div>
			</div>
		);
	}
}
export default Course;