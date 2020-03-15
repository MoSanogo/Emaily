import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
export default class Payments extends Component {
	render() {
		return (
			<div>
				<StripeCheckout amount={500} token={(token) => console.log(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY} />
			</div>
		);
	}
}
