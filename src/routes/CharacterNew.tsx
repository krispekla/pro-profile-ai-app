import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import CharacterUploader from '@/components/CharacterUploader';
import MessageWithLoader from '@/components/MessageWithLoader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CharacterNew() {
	const [creating, setCreating] = useState(false);
	const [createdSuccess, setCreatedSuccess] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (creating) {
			createCharacter();
		}
	}, [creating]);

	function createCharacter() {
		// Fetch the presigned URL from backend and provide some metadata
		// Use url to automatically upload the file to S3 of each image associated with certain metadata
		// Upon succesfull completition of all uploads, send to backend all file information along with charachter description information
		setTimeout(() => {
			setCreating(false);
			setCreatedSuccess(true);
		}, 2000);
	}

	return (
		<div className="mt-5">
			<h1 className="text-3xl font-light text-primary">
				New<span className="mx-1 font-bold">AI</span>
				<span>character</span>
			</h1>
			<div
				className=" flex flex-row space-x-4 rounded-xl bg-secondary p-4
						pb-5">
				<div className="mt-3 w-[240px]">
					<Label
						className="pl-1"
						htmlFor="name">
						Name:
					</Label>
					<Input
						type="text"
						id="name"
						placeholder="Name"
					/>
				</div>
				<div className="mt-3">
					<Label
						className="pl-1"
						htmlFor="name">
						Gender:
					</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Male" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="male">Male</SelectItem>
							<SelectItem value="female">Female</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-3">
					<Label
						className="pl-1"
						htmlFor="name">
						Hair color:
					</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Brown" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="brown">Brown</SelectItem>
							<SelectItem value="black">Black</SelectItem>
							<SelectItem value="blond">Blond</SelectItem>
							<SelectItem value="gray">Gray</SelectItem>
							<SelectItem value="red">Red</SelectItem>
							<SelectItem value="noHair">No hair</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-3">
					<Label
						className="pl-1"
						htmlFor="name">
						Eye color:
					</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Brown" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="brown">Brown</SelectItem>
							<SelectItem value="blue">Blue</SelectItem>
							<SelectItem value="green">Green</SelectItem>
							<SelectItem value="gray">Grey</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-3">
					<Label
						className="pl-1"
						htmlFor="name">
						Ethnicity:
					</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="White" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="White">White</SelectItem>
							<SelectItem value="black">Black</SelectItem>
							<SelectItem value="latino">Latino</SelectItem>
							<SelectItem value="asian">Asian</SelectItem>
							<SelectItem value="other">Not mentioned</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-3">
					<Label
						className="pl-1"
						htmlFor="name">
						Age:
					</Label>
					<Select>
						<SelectTrigger className="w-[120px]">
							<SelectValue placeholder="20-30" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="child">Child</SelectItem>
							<SelectItem value="adult">20-30</SelectItem>
							<SelectItem value="middleAged">30-40</SelectItem>
							<SelectItem value="senior">40+</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="mt-7 flex min-h-[850px] flex-col rounded-xl bg-secondary p-4 pb-5">
				<p className="mb-4">
					In order to get best results please use high quality images with good lighting. It is
					recommended to use images with a single person on them and also to use images with a
					neutral background.
				</p>
				<CharacterUploader />
			</div>
			<div className="mt-7 flex flex-row items-center justify-end space-x-2">
				{creating && <MessageWithLoader message="Character is being created" />}
				{createdSuccess && (
					<>
						<h3 className="mr-4 text-xl font-semibold text-green-500">
							Character created successfully!
						</h3>
						<Button onClick={() => navigate('/')}>
							<FaArrowLeft />
							<span className="ml-3">Go back to dashboard</span>
						</Button>
					</>
				)}
				{!createdSuccess && (
					<Button
						disabled={creating}
						onClick={() => setCreating(true)}>
						Create character
					</Button>
				)}
			</div>
		</div>
	);
}
