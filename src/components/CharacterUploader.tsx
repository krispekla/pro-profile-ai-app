import { FaPlus } from 'react-icons/fa';
import { Button } from './ui/button';

export default function CharacterUploader() {
	return (
		<div className="flex flex-row flex-wrap justify-around gap-2">
			{[...Array(6)].map((_, i) => {
				return (
					<div
						key={i}
						className="h-[240px] w-[240px] cursor-pointer rounded-xl border-2 border-solid border-primary bg-secondary hover:bg-slate-200">
						<div className="relative flex h-full flex-col items-center justify-center">
							<img
								key={i}
								className="h-[240px] w-[240px] rounded-xl"
								src="https://images.generated.photos/uDYtLaITxABClgf3JxK1Fb2T2DZXDUrtV1yGJKRkB6k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE3ODI1LmpwZw.jpg"
							/>
							<Button
								className="absolute bottom-1 right-1 p-2 text-primary shadow-sm"
								variant={'outline'}>
								remove
							</Button>
						</div>
					</div>
				);
			})}
			<div className="relative h-[240px] w-[240px] cursor-pointer rounded-xl border-2 border-dashed border-primary bg-secondary hover:bg-slate-200">
				<input
					className="absolute bottom-0 left-0 right-0 top-0 opacity-0 cursor-pointer"
					type="file"
					multiple
				/>
				<div className="flex h-full flex-col items-center justify-center">
					<FaPlus className="h-12 w-12 text-primary" />
					<p className="text-primary">Add images</p>
				</div>
			</div>
			{[...Array(8)].map((_, i) => {
				return (
					<div
						key={i}
						className="h-[240px] w-[240px] rounded-xl border-2 border-dashed border-primary bg-secondar">
						<div className="flex h-full flex-col items-center justify-center"></div>
					</div>
				);
			})}
		</div>
	);
}
