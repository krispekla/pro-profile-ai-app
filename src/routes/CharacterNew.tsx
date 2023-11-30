import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';

import MessageWithLoader from '@/components/MessageWithLoader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
				<div className="flex flex-row flex-wrap justify-around gap-2">
					{[...Array(8)].map((_, i) => (
						<img
							key={i}
							className="h-[240px] w-[240px] rounded-xl"
							src="https://images.generated.photos/uDYtLaITxABClgf3JxK1Fb2T2DZXDUrtV1yGJKRkB6k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE3ODI1LmpwZw.jpg"
						/>
					))}
					{[...Array(7)].map((_, i) => {
						return (
							<div
								key={i}
								className="h-[240px] w-[240px] cursor-pointer rounded-xl border-2 border-dashed border-primary bg-secondary hover:bg-slate-200">
								<div className="flex h-full flex-col items-center justify-center">
									<FaPlus className="h-12 w-12 text-primary" />
									<p className="text-primary">Add image</p>
								</div>
							</div>
						);
					})}
				</div>
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
