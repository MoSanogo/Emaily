import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div class="nav-wrapper">
					<a href="#" className="left brand-logo">
						Emaily
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="/">Login with Google</a>
						</li>
						{/* <li>
							<a href="">Components</a>

						</li>
						<li>
							<a href="">JavaScript</a>
						</li> */}
					</ul>
				</div>
			</nav>
		);
	}
}
