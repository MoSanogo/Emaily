import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Link } from 'react-router-dom';
class SurveysList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}
	renderSurveys() {
		return this.props.surveys.reverse().map(({ _id, title, body, dateSent, yes, no }) => {
			return (
				<div className="card blue-grey white-text darken-1" key={_id}>
					<div className="card-content">
						<span className="card-title center-align">{title}</span>
						<p className="center-align">{body}</p>
						<p className="right white-text">Sent On :{new Date(dateSent).toLocaleDateString()}</p>
					</div>
					<div className="card-action">
						<a href="#" className="white-text">
							Yes : {yes}
						</a>
						<a href="#" className="white-text">
							No : {no}
						</a>
						<Link className="btn-flat right">
							<i className="meduim material-icons left">delete</i>
						</Link>
					</div>
				</div>
			);
		});
	}
	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = ({ surveys }) => ({
	surveys
});
export default connect(mapStateToProps, { fetchSurveys })(SurveysList);
