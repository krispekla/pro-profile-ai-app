import GeneratedSinglePreview from '@/components/GeneratedSinglePreview';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function GeneratedPackage() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	function openModal(index: number) {
		console.log(`Opening modal for image ${index + 1}`);
		setOpen(true);
	}
	return (
		<>
			<div className="mt-6 flex flex-col">
				<h1 className="mb-8 text-3xl font-bold">Linkedin package</h1>
				<div>
					<p>
						Generated AI images for your Linkedin profile. for character model named{' '}
						<span className="font-bold capitalize">John Doe</span>
					</p>
				</div>
				<div className="mb-8 mt-3 flex flex-wrap gap-4">
					{Array.from({ length: 27 }).map((_, index) => (
						<img
							key={index}
							alt={`Example ${index + 1}`}
							src="https://images.generated.photos/uDYtLaITxABClgf3JxK1Fb2T2DZXDUrtV1yGJKRkB6k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE3ODI1LmpwZw.jpg"
							className="h-52 w-52"
							onClick={() => openModal(index)}
						/>
					))}
				</div>
				<div className="ml-auto flex justify-end">
					<Button
						className="mr-4"
						onClick={() => navigate('/')}>
						<FaArrowLeft />
						<span className="ml-3">Go back</span>
					</Button>
					<Button>Download all</Button>
				</div>
			</div>
			<GeneratedSinglePreview
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
}
