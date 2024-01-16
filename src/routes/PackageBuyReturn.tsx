import { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export default function PackageBuyReturn() {
	// const [status, setStatus] = useState(null);
	// const [customerEmail, setCustomerEmail] = useState('');
	const [sessionId, setSessionId] = useState('');

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sId = urlParams.get('session_id');
		console.log(sId);
		setSessionId(sId || '');

		// fetch(`${import.meta.env.VITE_API_URL}/payment/checkout?session_id=${sessionId}`)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setStatus(data.status);
		// 		setCustomerEmail(data.customer_email);
		// 	});
	}, []);
	const { isFetching, data: checkoutData } = useQuery({
		queryKey: ['checkout-return', sessionId],
		queryFn: ({ queryKey }) => {
			const [, sessionId] = queryKey;
			return axios.get(`/payment/checkout?session_id=${sessionId}`);
		},
	});

	if (checkoutData?.data.status === 'open') {
		// TODO: Fix passing package id
		return <Navigate to="/package/5/buy" />;
	}

	if (isFetching) {
		return <div className='mt-6 mx-auto text-center max-w-md'>Loading...</div>;
	}

	if (checkoutData?.data.status === 'complete') {
		return (
			<section className='' id="success">
				<p className='mt-6 mx-auto max-w-md'>
					We appreciate your business! A confirmation email will be sent to{' '}
					<span className="font-bold">{checkoutData?.data.customerEmail}</span>. If you have any questions, please email{' '}
					<a href="mailto:orders@example.com">orders@example.com</a>.
				</p>
			</section>
		);
	}

	return null;
}
