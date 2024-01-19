import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export default function PackageBuyReturn() {
	const [sessionId, setSessionId] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sId = urlParams.get('session_id');
		setSessionId(sId || '');
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
		return <div className="mx-auto mt-6 max-w-md text-center">Loading...</div>;
	}

	if (checkoutData?.data.status === 'complete') {
		return (
			<section
				className="mx-auto mt-12 flex max-w-xl flex-col"
				id="success">
				<h2 className="mb-3 text-2xl font-bold">Thank you for your purchase!</h2>
				<p className="mx-auto">
					We appreciate your business! A confirmation email will be sent to{' '}
					<span className="font-bold">{checkoutData?.data.customerEmail}</span>. In your dashboard,
					you should see your package. If you don't see it immediately, please allow some time for
					processing. If you still don't see your package after a while, please contact our support
					team at <a href="mailto:support@example.com">support@example.com</a>
				</p>
				<Button
					className="ml-auto mt-6"
					onClick={() => navigate('/')}>
					Go to Dashboard
				</Button>
			</section>
		);
	}

	return null;
}
