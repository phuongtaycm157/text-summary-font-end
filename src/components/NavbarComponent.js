import React, { Component } from 'react';

import './NavbarComponent.css';
import logo from '../MyLogo.png';

class NavbarComponent extends Component {
	render() {
		return (
		<div className='navbar'>
			<img src={logo} width={84} />
			<div className='navbar-option'>
				<a href='#'>Other's product</a>
				<button>Login</button>
			</div>
		</div>
		);
	}
}

export default NavbarComponent;