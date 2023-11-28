import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { useState } from 'react';
import { Button } from './ui/button';

type Characters = {
	id: number;
	name: string;
};

type SelectedCharacter = Characters & {
	selected?: boolean;
};

interface PackageGenerateModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function PackageGenerateModal(props: PackageGenerateModalProps) {
	const [selectedCharacters, setSelectedCharacters] = useState<Array<SelectedCharacter>>([
		{ id: 1, name: 'Alice Smith' },
		{ id: 2, name: 'Bob Johnson' },
		{ id: 3, name: 'Charlie Brown' },
		{ id: 4, name: 'David Wilson' },
		{ id: 5, name: 'Eva Davis' },
	]);

	const setSelected = (id: number) => {
		const newSelectedCharacters = selectedCharacters.map((chr: SelectedCharacter) => {
			if (chr.id === id) {
				return {
					...chr,
					selected: !chr.selected,
				};
			}
			return chr;
		});
		setSelectedCharacters(newSelectedCharacters);
	};
	const [generate, setGenerate] = useState(false);

	return (
		<Dialog
			open={props.open}
			onOpenChange={props.setOpen}>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle className="capitalize">Linkedin package</DialogTitle>
					{!generate && (
						<div>
							<h3>Select characters for which package will be used to generate imgs:</h3>
							<div className="flex flex-wrap">
								{selectedCharacters.map((chr, i) => (
									<div
										key={i}
										className={`
											m-1 mr-3 flex flex-col items-center justify-center
											border-4
											${chr.selected ? 'border-yellow-200' : 'border-transparent'}
										`}
										onClick={() => setSelected(chr.id)}>
										<div className="relative m-3 h-24 w-24 rounded-xl bg-secondary text-white">
											<img
												className="absolute left-0 top-0 h-full w-full object-cover"
												src="https://avatars.githubusercontent.com/u/124599?v=4"
												alt="Package Image"
											/>
										</div>
										<div className="">{chr.name}</div>
									</div>
								))}
							</div>
							<div className="mt-8 flex items-end justify-end">
								<Button
									variant="default"
									onClick={() => setGenerate(true)}>
									Generate
								</Button>
							</div>
						</div>
					)}
					{generate && (
						<div>
							<div className="my-10 flex items-center justify-center">
								<div className="mr-3">Generating</div>
								<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary"></div>
								<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary delay-150"></div>
								<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary delay-300"></div>
							</div>
							<div className="mt-4 text-center">
								Images are generated for selected characters. <br />
								You will be notified by email when images are ready. <br />
								You can close this modal now.
							</div>
						</div>
					)}
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
