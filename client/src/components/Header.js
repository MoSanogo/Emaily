import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MobileSideNav from './MobileSideNav';

import Payments from './Payments';
class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return [
					<li key={0} style={{ marginLeft: '1.5rem' }}>
						<Payments />
					</li>,
					<li key={1} style={{ marginLeft: '1.8rem', paddingLeft: '0.5rem' }}>
						Credits : {this.props.auth.credits}
					</li>,
					<li key={2}>
						<Link to="/surveys">Dashboard</Link>
					</li>,
					<li key={4}>
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<>
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo" style={{ paddingLeft: '0.5rem' }}>
							Emaily
						</Link>
						<Link to="/" data-target="mobile" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
				<MobileSideNav className="sidenav" id="mobile">
					{this.renderContent()}
				</MobileSideNav>
			</>
		);
	}
}

// document.addEventListener('DOMContentLoaded', function() {
// 	var elems = document.querySelectorAll('.sidenav');
// 	var instances = M.Sidenav.init(elems);
// });

const maStateToProps = ({ auth }) => {
	return { auth };
};
export default connect(maStateToProps)(Header);
