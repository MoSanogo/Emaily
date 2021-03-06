const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
const WelcomeMailer = require('./WelcomeMailer');
passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			console.log(profile);
			console.log(profile.emails[0].value);
			if (existingUser) {
				//We already have  a record with the given profile ID
				return done(null, existingUser);
			}
			//we don't have a user record with this ID.
			const user = await new User({ googleId: profile.id }).save();
			const welcomeMessage = new WelcomeMailer(
				'Welcome to Emaily.come',
				`${profile.emails[0].value}`,
				`<div style="text-align :center"><h3>Welcome ${profile.displayName}
				</h3>
				<p>Thank for choosing as survey provider. From Modibo Sanogo , application Owner .</p></div>`
			);
			await welcomeMessage.send();
			done(null, user);
		}
	)
);
