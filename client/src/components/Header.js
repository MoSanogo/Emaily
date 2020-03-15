import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
					<li key={0}>
						<Payments />
					</li>,
					<li key={1}>
						<a href="/api/loggout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
						Emaily
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function maStateToProps({ auth }) {
	return { auth };
}
export default connect(maStateToProps)(Header);
