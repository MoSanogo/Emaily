//SuevryFiled contains logic to render a single label and text.
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '0.35rem' }} />
			<div className="red-text" style={{ marginBottom: '1.25rem' }}>
				{touched && error}
			</div>
		</div>
	);
};
