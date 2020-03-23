const _ = require('lodash');
const { Path } = require('path-parser');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');
const { URL } = require('url');
module.exports = (app) => {
	app.get('/api/surveys', requireLogin, async (req, res, next) => {
		const surveys = await Survey.find({
			_user: req.user.id
		}).select({
			recipients: false
		});
		res.send(surveys);
	});
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
	app.get('/api/surveys/:surveyId/:choice', (req, res, next) => {
		res.send('Thanks for voting');
	});
	app.post('/api/surveys/webhooks', (req, res, next) => {
		const p = new Path('/api/surveys/:surveyId/:choice');
		const result = _.chain(req.body)
			.map(({ email, url }) => {
				if (url) {
					const match = p.test(new URL(url).pathname);
					return { email, surveyId: match.surveyId, choice: match.choice };
				}
			})
			.compact()
			.uniqBy('email', 'surveyId')
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne(
					{
						_id: surveyId,
						recipients: {
							$elemMatch: { email, responded: false }
						}
					},
					{
						$inc: { [choice]: 1 },
						$set: { 'recipients.$.responded': true },
						lastResponded: new Date()
					}
				).exec();
			})
			.value();

		res.send(result);
	});
};
