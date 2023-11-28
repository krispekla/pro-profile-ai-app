import { useState } from 'react';
import { useNavigate } from 'react-router';
import PackageGenerateModal from './PackageGenerateModal';
import { Button } from './ui/button';

interface PackageCardProps {
	bought?: boolean;
}

export default function PackageCard({ bought = false }: PackageCardProps) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	return (
		<>
			<div
				className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1"
				onClick={() => !bought && navigate('/package/5')}>
				<img
					className="absolute left-0 top-0 h-full w-full object-cover"
					src="https://fastly.picsum.photos/id/982/536/354.jpg?hmac=xXo1bhVRPwA6K0ttkJqSEghDCDNd7xWKfKpE5kqXlQo"
					alt="Package Image"
				/>
				<div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center shadow-2xl">
					<span className="text-2xl font-bold text-white">Linkedin package</span>
					<Button
						className="absolute bottom-0 left-0 right-0 mx-auto mb-5 w-1/2"
						variant="default"
						onClick={(e) => {
							e.stopPropagation();
							bought ? setOpen(!open) : navigate('/package/5');
						}}>
						{bought ? 'Generate' : 'Buy'}
					</Button>
					<PackageGenerateModal
						open={open}
						setOpen={setOpen}
					/>
				</div>
			</div>
		</>
	);
}
