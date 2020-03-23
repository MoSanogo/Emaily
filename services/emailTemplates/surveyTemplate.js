const keys = require('../../config/keys');
module.exports = ({ body, title, id }) => {
	return `
	<html>
	<body>
		<div style="text-align:center;">
			<h3 style="text-color:red">${title}</h3>
			<p>Please answer the folowing question:</p>
			<p>${body}</p>
			<div>
				<a href="${keys.redirectDomain}/api/surveys/${id}/yes">
					Yes
				</a>
			</div>
			<div>
				<a href="${keys.redirectDomain}/api/surveys/${id}/no">
					No
				</a>
			</div>
		</div>
	</body>
</html>	
	`;
};
