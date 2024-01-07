import { Button } from './ui/button';
import PackageGenerateModal from './PackageGenerateModal';
import { PackageItem } from './PackageList';
import { useNavigate } from 'react-router';
import { useState } from 'react';

interface PackageCardProps {
	bought?: boolean;
	package: PackageItem;
}

export default function PackageCard({ bought = false, package: pckg }: PackageCardProps) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	return (
		<>
			<div
				className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1"
				onClick={() => !bought && navigate('/package/5')}>
				<img
					className="absolute left-0 top-0 h-full w-full object-cover"
					src={pckg.CoverImgURL}
					alt={pckg.Description}
				/>
				<div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center shadow-2xl">
					<span className="text-2xl font-bold text-white">{pckg.Name}</span>
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
