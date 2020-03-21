import _ from 'lodash';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails) => {
	//  if(emails.test())
	const invalidEmails = _.chain(emails.split(',').map((email) => email.trim()))
		.filter((email) => !re.test(email))
		.value();
	if (invalidEmails.length) {
		return ` These emails are invalid :${invalidEmails}`;
	}
	return null;
};
