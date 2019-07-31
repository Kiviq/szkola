import React, { Component } from 'react';
import Data from '../../data.json';
import LinkEl from './link';
import styles from './styles.css';
class Nav extends Component {

	render() {
		const listItems = Data.navigation.links.map((el, ind)=>{
			return <LinkEl key={ind} url={el.url} name={el.name} />
		})
		return (
			<div className="nav_list">
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}
}
export default Nav;