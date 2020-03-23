const keys = require('../../config/keys');
module.exports = ({ body, title, id, subject }) => {
	return `
	<html>
	<body>
		<div style="text-align:center; border:2px solid white;background-color:#fbf4f9;border-radius:0.5rem;padding:0.5rem">
		<h3 style="text-color:red">${title}</h3>
		<p>${subject}</p>
		<p>${body}</p>
		<div style="display:inline-block;">
			<a href="${keys.redirectDomain}/api/surveys/${id}/yes" style="margin:2.5rem;padding:1.5rem;color:green">
				Yes
			</a>
		
			<a href="${keys.redirectDomain}/api/surveys/${id}/no" style="margin:2.5rem;padding:1.5rem;color:red">
				No
			</a>
		</div>
	</div>

	</body>
</html>	
	`;
};
