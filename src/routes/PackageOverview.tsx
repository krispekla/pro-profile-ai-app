import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function PackageOverview() {
	const { id } = useParams<{ id: string }>();
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(Number(event.target.value));
	};

	const handleBuyButtonClick = () => {
		navigate(`/package/${id}/buy?quantity=${quantity}`);
		// Add your logic for handling the buy button click here
		// For example, you can navigate to a checkout page or perform an API call
	};

	return (
		<div className="mt-6 flex flex-col items-center">
			<h1 className="mb-8 text-3xl font-bold">Linkedin package</h1>
			<div className="mb-4 flex">
				<img
					alt="Package"
					src="https://fastly.picsum.photos/id/982/536/354.jpg?hmac=xXo1bhVRPwA6K0ttkJqSEghDCDNd7xWKfKpE5kqXlQo"
					className="mr-6 h-64 w-64"
				/>
				<p className="w-1/2 text-gray-500">
					Enhance your linkedin profile with this package. This package includes a professional
					photo, a professional bio, and a professional resume. Take your Linkedin profile to next
					level. With this package, you will be able to get more job offers and more connections.
					You will be able to get more job offers and more connections. You will be able to get more
					job offers and more connections.
				</p>
			</div>
			<h2 className="mt-12 text-xl">Examples:</h2>
			<div className="mb-8 mt-3 flex flex-wrap justify-between">
				{Array.from({ length: 27 }).map((_, index) => (
					<img
						key={index}
						alt={`Example ${index + 1}`}
						src="https://fastly.picsum.photos/id/982/536/354.jpg?hmac=xXo1bhVRPwA6K0ttkJqSEghDCDNd7xWKfKpE5kqXlQo"
						className="mb-2 mr-2 h-32 w-32"
					/>
				))}
			</div>
			<div className="mb-4 flex items-center">
				<label
					htmlFor="quantity"
					className="mr-2">
					Quantity:
				</label>
				<input
					type="number"
					id="quantity"
					min={1}
					value={quantity}
					onChange={handleQuantityChange}
					className="w-16 rounded border border-gray-300 px-2 py-1"
				/>
				<Button
					onClick={handleBuyButtonClick}
					className="ml-8 px-8 py-2">
					Buy
				</Button>
			</div>
		</div>
	);
}
