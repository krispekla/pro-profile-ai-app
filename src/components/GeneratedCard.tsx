import { useNavigate } from 'react-router';
import { Button } from './ui/button';

export default function GeneratedCard() {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1"
				onClick={() => navigate('/package/5')}>
				<img
					className="absolute left-0 top-0 h-full w-full object-cover"
					src="https://fastly.picsum.photos/id/982/536/354.jpg?hmac=xXo1bhVRPwA6K0ttkJqSEghDCDNd7xWKfKpE5kqXlQo"
					alt="Package Image"
				/>
				<div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center shadow-2xl">
					<div className="flex flex-col mb-12">
						<span className="text-2xl font-bold text-white">Linkedin package</span>
						<span className="text-xl mt-auto text-white">John Doe</span>
					</div>
					<Button
						className="absolute bottom-0 left-0 right-0 mx-auto mb-2 w-1/2"
						variant="secondary"
						onClick={(e) => {
							e.stopPropagation();
							navigate('/package/5');
						}}>
						Open
					</Button>
				</div>
			</div>
		</>
	);
}
