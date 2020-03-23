const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');
module.exports = (app) => {
	app.post('/api/surveys', requireLogin, requireCredits, async (req, res, next) => {
		const { title, subject, body, recipients } = req.body;
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});
		//Great Place to send an email.
		const mailer = new Mailer(survey, surveyTemplate(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();
			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
	app.get('/api/surveys/thanks', (req, res, next) => {
		res.send('Thanks for voting');
	});
	app.post('/api/surveys/webhooks', (req, res, next) => {
		const events = _.map(req.body, ({ email, url }) => {
			const pathname = new URL(url).pathname;
			const p = new Path('/api/surveys/:surveyId/:choice');
			console.log(p.test(pathname));
			const match = p.test(pathname);
			if (match) {
				return { email, surveyId: match.surveyId, choice: match.choice };
			}
		});
		console.log(events);
		res.send({});
	});
};
