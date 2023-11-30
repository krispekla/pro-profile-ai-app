import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { Button } from './ui/button';

interface GeneratedSinglePreviewProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function GeneratedSinglePreview(props: GeneratedSinglePreviewProps) {
	return (
		<Dialog
			open={props.open}
			onOpenChange={props.setOpen}>
			<DialogContent className="h-[calc(100vh-74px)] max-w-screen-xl">
				<DialogHeader>
					<DialogTitle className="capitalize">Image preview</DialogTitle>
				</DialogHeader>
					<img
						src="https://images.generated.photos/uDYtLaITxABClgf3JxK1Fb2T2DZXDUrtV1yGJKRkB6k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE3ODI1LmpwZw.jpg"
						className="object-contain h-[42rem] w-[42rem] mx-auto"
					/>
				<div className="flex justify-end">
					<Button>Download</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
