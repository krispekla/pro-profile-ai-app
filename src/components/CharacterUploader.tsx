import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from './ui/button';

export default function CharacterUploader() {
	const [files, setFiles] = useState<File[] | null>(null);

	const addImages = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const selectedFiles = Array.from(event.target.files);
			setFiles((prevFiles) => (prevFiles ? [...prevFiles, ...selectedFiles] : selectedFiles));
		}
	};

	}

	return (
		<div className="flex flex-row flex-wrap justify-around gap-2">
			{files && Array.from(files).map((_, i) => {
				return (
					<div
						key={i}
						className="h-[240px] w-[240px] cursor-pointer rounded-xl border-2 border-solid border-primary bg-secondary hover:bg-slate-200">
						<div className="relative flex h-full flex-col items-center justify-center">
							<img
								key={i}
								className="h-[240px] w-[240px] rounded-xl"
								src={URL.createObjectURL(files[i])}
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
					className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer opacity-0"
					type="file"
					accept="image/jpeg, image/jpg, image/png"
					multiple
					onChange={(e) => addImages(e)}
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
						className="bg-secondar h-[240px] w-[240px] rounded-xl border-2 border-dashed border-primary">
						<div className="flex h-full flex-col items-center justify-center"></div>
					</div>
				);
			})}
		</div>
	);
}
