import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function PackageBuy() {
	const [quantity, setQuantity] = useState(1);
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const url = new URL(window.location.href);
		const quantityParam = url.searchParams.get('quantity');

		if (quantityParam) {
			setQuantity(Number(quantityParam));
		}
	}, []);

	const handlePayment = () => {
		// Simulate successful payment
		setPaymentSuccess(true);
	};

	return (
		<div className="container mx-auto mt-6 flex flex-col items-center justify-center">
			<div className="my-12">
				<h2 className="text-2xl font-bold">Mock Stripe Payment Element</h2>
				{/* Stripe payment element */}
				<div className="rounded-lg bg-gray-200 p-4">{/* Mock Stripe payment element */}</div>
			</div>
			<div className="flex items-center justify-between">
				<p className="mr-8 text-lg">Selected Quantity: {quantity}</p>
				<Button onClick={handlePayment}>Pay</Button>
			</div>
			{paymentSuccess && (
				<div className="my-12 text-green-500">
					<h2 className="text-2xl font-bold">Payment Successful</h2>
					<p className="mb-8 text-lg">Thank you for purchasing the package!</p>
					<Button onClick={() => navigate('/')}>
						<FaArrowLeft />
						<span className="ml-3">Go back to dashboard</span>
					</Button>
				</div>
			)}
		</div>
	);
}
