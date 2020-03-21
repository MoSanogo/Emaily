const sendgrid = require('sendgrid');
const keys = require('../config/keys');
const helper = sendgrid.mail;

class WelcomeMailer extends helper.Mail {
	constructor(subject, userEmail, content) {
		super();
		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email('no-reply@emaily.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipient = new helper.Email(userEmail);

		this.addContent(this.body);
		this.addRecipients();
	}
	addRecipients() {
		const personalize = new helper.Personalization();
		personalize.addTo(this.recipient);

		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = WelcomeMailer;
