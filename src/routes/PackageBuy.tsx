import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

import axios from '@/lib/axios';
import useStore from '@/store/store';

export default function PackageBuy() {
	const [clientSecret, setClientSecret] = useState('');
	const stripePromise = useStore((state) => state.stripePromise);
	// const [quantity, setQuantity] = useState(1);
	// const [paymentSuccess, setPaymentSuccess] = useState(false);
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	const url = new URL(window.location.href);
	// 	const quantityParam = url.searchParams.get('quantity');

	// 	if (quantityParam) {
	// 		setQuantity(Number(quantityParam));
	// 	}
	// }, []);
	useEffect(() => {
		setCheckoutClientSecret();
	}, []);

	async function setCheckoutClientSecret() {
		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL}/checkout/sessions`);
			if (res.status === 201 && res.data) {
				setClientSecret(res.data.clientSecret);
			}
		} catch (error) {
			// TODO: 'Handle error'
		}
	}

	// const handlePayment = () => {
	// 	// Simulate successful payment
	// 	setPaymentSuccess(true);
	// };

	return (
		<div className="mt-12">
			{/* <div className="my-12">
				<h2 className="text-2xl font-bold">Mock Stripe Payment Element</h2>
			</div>
			<div className="flex items-center justify-between">
				<p className="mr-8 text-lg">Selected Quantity: {quantity}</p>
				<Button onClick={handlePayment}>Pay</Button>
			</div> */}
			<div id="checkout">
				{clientSecret && (
					<EmbeddedCheckoutProvider
						stripe={stripePromise}
						options={{ clientSecret }}>
						<EmbeddedCheckout />
					</EmbeddedCheckoutProvider>
				)}
			</div>
			{/* {paymentSuccess && (
				<div className="my-12 text-green-500">
					<h2 className="text-2xl font-bold">Payment Successful</h2>
					<p className="mb-8 text-lg">Thank you for purchasing the package!</p>
					<Button onClick={() => navigate('/')}>
						<FaArrowLeft />
						<span className="ml-3">Go back to dashboard</span>
					</Button>
				</div>
			)} */}
		</div>
	);
}
