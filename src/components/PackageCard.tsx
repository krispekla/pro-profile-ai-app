import { useNavigate } from 'react-router';
import { Button } from './ui/button';

export default function PackageCard() {
	const navigate = useNavigate();
	return (
		<div
			className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1"
			onClick={() => navigate('/package/5')}>
			<img
				className="absolute left-0 top-0 h-full w-full object-cover"
				src="https://picsum.photos/536/354"
				alt="Package Image"
			/>
			<div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center shadow-2xl">
				<span className="text-2xl font-bold text-white">Linkedin package</span>
			</div>
			{}
			<Button
				className="absolute bottom-0 left-0 right-0 mx-auto mb-5 w-1/2"
				variant="default"
				onClick={() => navigate('/package/5')}>
				Generate
			</Button>
		</div>
	);
}
