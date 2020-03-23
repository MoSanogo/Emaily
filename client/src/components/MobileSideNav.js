import React, { Component } from 'react';
import M from 'materialize-css';
export default class MobileSideNav extends Component {
	ulRef = React.createRef();
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', () => {
			const instances = M.Sidenav.init(this.ulRef.current);
		});
	}

	render() {
		return (
			<div>
				<ul className="sidenav darken-text" ref={this.ulRef} id="mobile">
					{this.props.children}
				</ul>
			</div>
		);
	}
}
