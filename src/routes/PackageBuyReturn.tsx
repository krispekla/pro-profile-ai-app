import { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

export default function PackageBuyReturn() {
	const [status, setStatus] = useState(null);
	const [customerEmail, setCustomerEmail] = useState('');

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sessionId = urlParams.get('session_id');

		fetch(`${import.meta.env.VITE_API_URL}/payment/checkout?session_id=${sessionId}`)
			.then((res) => res.json())
			.then((data) => {
				setStatus(data.status);
				setCustomerEmail(data.customer_email);
			});
	}, []);

	if (status === 'open') {
		// TODO: Fix passing package id
		return <Navigate to="/package/5/buy" />;
	}

	if (status === 'complete') {
		return (
			<section id="success">
				<p>
					We appreciate your business! A confirmation email will be sent to {customerEmail}. If you
					have any questions, please email{' '}
					<a href="mailto:orders@example.com">orders@example.com</a>.
				</p>
			</section>
		);
	}

	return null;
}
