const passport = require('passport');
module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res, next) => {
		res.redirect('/surveys');
	});
	app.get('/api/logout', (req, res, next) => {
		req.logout();
		res.redirect('/');
	});
	app.get('/api/current_user', (req, res, next) => {
		res.send(req.user);
	});
};
