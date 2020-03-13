const proxy = require('http-proxy-middleware');
module.exports = (app) => {
	app.use(
		['/api/*', '/auth/google'],
		proxy.createProxyMiddleware({
			target: 'http://localhost:5000',
			changeOrigin: false
		})
	);
};
