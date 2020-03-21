import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
	return (
		<div>
			Dashbord
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large red" href="/">
					<i className="large material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};
export default Dashboard;
