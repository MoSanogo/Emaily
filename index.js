const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieSession = require('cookie-session');
const { json, urlencoded } = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Surveys');
require('./services/passport');

const app = express();
app.use(json ? json() : bodyParser.json());
app.use(urlencoded ? urlencoded({ extended: true }) : bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	//Express will serve up production assets like our main.js file ,or main.css file;
	// 'client/build'
	app.use(express.static(path.resolve(__dirname, 'client', 'build')));
	//Express will serve up the index.html  file if it does not recognize the route;

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.get('/api/logout', (req, res, next) => {
	res.send('We are done ,buudies!!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
