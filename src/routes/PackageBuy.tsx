import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';
import { PackageItem } from '@/types/package';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import useStore from '@/store/store';

export default function PackageBuy() {
	const { id } = useParams<{ id: string }>();
	const [clientSecret, setClientSecret] = useState('');
	const [checkoutError, setCheckoutError] = useState('');
	const [isFetchingCheckoutClientSecret, setIsFetchingCheckoutClientSecret] = useState(false);
	const stripePromise = useStore((state) => state.stripePromise);
	const navigate = useNavigate();

	const {
		isFetching: isPackagesFetching,
		isError,
		data: packages,
	} = useQuery({
		queryKey: ['packages'],
		queryFn: async () => axios.get('/packages/listing'),
	});

	useEffect(() => {
		if (id && packages?.data.length > 0) {
			const packageItem = packages?.data.find((x: PackageItem) => x.id === parseInt(id));
			const url = new URL(window.location.href);
			const quantityParam = url.searchParams.get('quantity');
			let quantity = 1;

			if (quantityParam) {
				const parsedQuantity = parseInt(quantityParam);
				if (!isNaN(parsedQuantity) && parsedQuantity > 1) {
					quantity = parsedQuantity;
				}
			}
			setCheckoutClientSecret(packageItem, quantity);
		}
	}, [id, packages]);

	async function setCheckoutClientSecret(pckg: PackageItem, quantity: number) {
		if (!stripePromise || !pckg || !pckg.pricing) return;
		try {
			setIsFetchingCheckoutClientSecret(true);
			const body: { productIds: string[] } = {
				productIds: pckg.pricing.map((x) => Array(quantity).fill(x.StripeProductID)).flat(),
			};

			const res = await axios.post(`${import.meta.env.VITE_API_URL}/payment/checkout`, body);
			if (res.status === 201 && res.data) {
				setClientSecret(res.data.clientSecret);
			}
		} catch (error) {
			// TODO: 'Handle error'
			setCheckoutError('Something went wrong. Please try again later.');
		} finally {
			setIsFetchingCheckoutClientSecret(false);
		}
	}

	if (isPackagesFetching || isFetchingCheckoutClientSecret) {
		return (
			<div className="mx-auto my-12 max-w-md">
				<h2 className="mx-auto text-2xl font-bold">Loading...</h2>
			</div>
		);
	}
	if (isError || checkoutError) {
		return (
			<>
				{!checkoutError && (
					<div className="mx-auto my-12">
						<h2 className="text-2xl font-bold">Service unavailable</h2>
						<p className="mb-8 text-lg">{checkoutError}</p>
						<Button onClick={() => navigate('/')}>
							<FaArrowLeft />
							<span className="ml-3">Go back to dashboard</span>
						</Button>
					</div>
				)}
			</>
		);
	}

	return (
		<div className="mt-12">
			<div id="checkout">
				{clientSecret && (
					<EmbeddedCheckoutProvider
						stripe={stripePromise}
						options={{ clientSecret }}>
						<EmbeddedCheckout />
					</EmbeddedCheckoutProvider>
				)}
			</div>
		</div>
	);
}
