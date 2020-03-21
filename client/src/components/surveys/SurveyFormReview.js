import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';
import formFields from './formFields';
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ label, name }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Please,confirm you entries!!</h5>
			{reviewFields}
			<button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
				Back
			</button>
			<button className="green btn-flat right white-text " onClick={() => submitSurvey(formValues, history)}>
				Send Survey
				<i className="material-icons right ">email</i>
			</button>
		</div>
	);
};
function mapStateToProps(state) {
	return { formValues: state.form.SurveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
