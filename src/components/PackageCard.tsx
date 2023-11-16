import { useNavigate } from "react-router";

export default function PackageCard() {
  const navigate = useNavigate();
	return (
		<div className="relative h-52 w-72 cursor-pointer shadow-lg shadow-primary hover:-translate-y-1" onClick={() => navigate("/package/5")}>
			<img
				className="absolute left-0 top-0 h-full w-full object-cover"
				src="https://picsum.photos/536/354"
				alt="Package Image"
			/>
			<div className="absolute bottom-0 left-0 flex h-24 w-full items-center justify-center">
				<span className="text-2xl font-bold text-white">Linkedin package</span>
			</div>
		</div>
	);
}