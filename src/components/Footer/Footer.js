
import React, { Component } from 'react';
import JsonData from '../../data.json';
import LinkEl from './Link/Link.js';
import styles from './styles.css';
class Footer extends Component {
	renderLinks = JsonData.footer.links.map((el, ind)=>{
		return <LinkEl key={ind} url={el.url} name={el.name} sublist={el.sublist}/>
	})
	render() {
		return (
			<footer>
				<div className="footer_cont">
					<div className="links">
						<ul>
							{this.renderLinks}
						</ul>
					</div>
					<div className="copyrights">
				<p className="owner">
				Copyright © 2019 ProEdu, made by <img src={require('../../media/zakoduj.png')} alt="zakoduj"/>
				</p>
				</div>
				</div>
				
			</footer>
		);
	}
}
export default Footer;