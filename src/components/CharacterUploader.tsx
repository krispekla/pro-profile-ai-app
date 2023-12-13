import { AxiosProgressEvent, AxiosRequestConfig } from 'axios';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from '../lib/axios';
import { Button } from './ui/button';

export default function CharacterUploader() {
	// TODO: Define a type for files that will have additional info like upload progress
	const [files, setFiles] = useState<File[] | null>(null);

	const addImages = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
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
		const url = '';
		const config: AxiosRequestConfig = {
			onUploadProgress: function (progressEvent: AxiosProgressEvent) {
				if (progressEvent.total) {
					const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					console.log(`Upload is ${percentCompleted}% done.`);
				}
			},
			headers: {
				'Content-Type': image.type,
			},
		};

		const response = await axios.put(url, image, config);

		if (response.status === 200) {
			console.log('Image uploaded successfully');
			return;
		}
		throw new Error(`HTTP error! status: ${response.status}`);
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
