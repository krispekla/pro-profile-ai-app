import { useEffect, useState } from 'react';

export default function PackageBuy() {
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
        const url = new URL(window.location.href);
        const quantityParam = url.searchParams.get('quantity');

        if (quantityParam) {
            setQuantity(Number(quantityParam));
        }
	}, []);
	return <div>PackageBuy with quantity: {quantity}</div>;
}
