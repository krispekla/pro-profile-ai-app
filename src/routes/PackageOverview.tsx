import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { PackageItem } from '@/types/package';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
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

	const { isSuccess, data: packages } = useQuery({
		queryKey: ['packages'],
		queryFn: async () => axios.get('/packages/listing'),
	});

	const pckg = packages?.data.find((x: PackageItem) => x.id === parseInt(id!));

	const imgsReady =
		id &&
		isSuccess &&
		packages?.data.length > 0 &&
		packages?.data.find((x: PackageItem) => x.id === parseInt(id))?.imgs.length > 0;

	return (
		<div className="mt-6 flex flex-col items-center">
			<h1 className="mb-8 text-3xl font-bold">{pckg.name}</h1>
			<div className="mb-4 flex">
				<img
					alt="Package"
					src={pckg.cover_img_url}
					className="mr-6 h-64 object-contain"
				/>
				<p className="w-1/2 text-gray-500">{pckg.description}</p>
			</div>
			{imgsReady && (
				<>
					<h2 className="mt-12 text-xl">Examples:</h2>
					<div className="mb-8 mt-3 flex flex-wrap">
						{packages?.data
							.find((x: PackageItem) => x.id === parseInt(id))
							?.imgs.map((p: { url: string }, index: number) => (
								<img
									key={index}
									alt={`Example ${index + 1}`}
									src={p.url}
									className="mb-2 mr-2 w-64 object-contain"
								/>
							))}
					</div>
				</>
			)}
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
