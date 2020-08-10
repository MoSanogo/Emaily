module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must be logged in' });
	}
	next();
};
//We could have used the property Authenticated property on req object to check if the user is logged in or not. req.Authenticated();
