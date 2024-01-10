import { useNavigate } from 'react-router';

interface GeneratedCardProps {
	id: number;
	packageTitle: string;
	characterName: string;
}

export default function GeneratedCard(props: GeneratedCardProps) {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1"
				onClick={() => navigate(`/generated/${props.id}`)}>
				<img
					className="absolute left-0 top-0 h-full w-full object-cover"
					src="https://fastly.picsum.photos/id/982/536/354.jpg?hmac=xXo1bhVRPwA6K0ttkJqSEghDCDNd7xWKfKpE5kqXlQo"
					alt="Package Image"
				/>
				<div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center shadow-2xl">
					<div className="flex flex-col">
						<span className="text-2xl font-bold text-white">{props.packageTitle}</span>
						<span className="mt-3 text-xl text-white">{props.characterName}</span>
					</div>
				</div>
			</div>
		</>
	);
}
