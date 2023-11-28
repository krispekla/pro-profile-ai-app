import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

import { Button } from './ui/button';

interface PackageGenerateModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function PackageGenerateModal(props: PackageGenerateModalProps) {
	return (
		<Dialog
			open={props.open}
			onOpenChange={props.setOpen}>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle className="capitalize">Linkedin package</DialogTitle>
					<DialogDescription>
						<h3>Select characters for which package will be used to generate imgs:</h3>
						<div className="flex flex-wrap space-x-5">
							{[...Array(4)].map((_, i) => (
								<div
									key={i}
									className="flex flex-col items-center justify-center">
									<div className="l frounded-xl m-3 h-24 w-24 bg-secondary text-white">
										{String.fromCharCode(65 + i)}
									</div>
									<div className="">Character {String.fromCharCode(65 + i)}</div>
								</div>
							))}
						</div>
						<div className="mt-8 flex items-end justify-end">
							{/* On click generate message will be appeared with button to close modal */}
							<Button
								variant="default"
								onClick={(e) => {
									e.stopPropagation();
									props.setOpen(false);
								}}>
								Generate
							</Button>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
