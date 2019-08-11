import React, { Component } from 'react';
import styles from './styles.css';
class Product extends Component {
	
	// ''
	giveClass(ele){
		let classes;
		if (ele === 'content'){
			classes = `product_content ${this.props.side}`;
		} else{
			classes = `product_background ${this.props.side === 'left' ? 'right' : 'left'}`;
		}
		return (classes)
	}
	renderPerks = this.props.perks.map((el, ind)=>{
		return <li className="perk" key={ind}>{el}</li>
	})
	render() {
		let name = this.props.handle;
		return (
			<div className="product">
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

export default Product;


