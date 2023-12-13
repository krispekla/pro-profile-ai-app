import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from '../lib/axios';
import { Button } from './ui/button';

export default function CharacterUploader() {
	const [files, setFiles] = useState<File[] | null>(null);

	const addImages = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			// Fetch the presigned URL
			// Use url to automatically upload the file to S3
			const selectedFiles = Array.from(event.target.files);
			setFiles((prevFiles) => (prevFiles ? [...prevFiles, ...selectedFiles] : selectedFiles));
		}
	};

	function removeImage(i: number) {
		const newFiles = Array.from(files!);
		newFiles.splice(i, 1);
		setFiles(newFiles.length > 0 ? newFiles : null);
	}

	async function uploadImage(image: File) {
		const url = 'https://ppai-local.4e16439b8486c91482dd1b67dd992643.r2.cloudflarestorage.com/kris555.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f3b17af2e07b9687026ebafd23019a8e%2F20231213%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20231213T211937Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&x-id=PutObject&X-Amz-Signature=75a230dca659841fff4d9bea5f54139e3008a8d42e5dd3ca9d84d1728f6ad341';

		const response = await axios.put(url, image, {
			headers: {
				'Content-Type': image.type,
			},
		});

		if (response.status !== 200) {
			throw new Error(`HTTP error! status: ${response.status}`);
		} else {
			console.log('Image uploaded successfully');
		}
	}

	return (
		<div className="flex flex-row flex-wrap justify-around gap-2">
			{files &&
				files.map((_, i) => {
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
								<div className="absolute bottom-0 right-0 flex space-x-1">
									<Button
										className="p-2 text-primary shadow-sm"
										variant={'outline'}
										onClick={() => removeImage(i)}>
										remove
									</Button>
									<Button
										className="p-2 text-primary shadow-sm"
										variant={'outline'}
										onClick={() => uploadImage(files[i])}>
										upload
									</Button>
								</div>
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
