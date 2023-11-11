import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from './ui/avatar';

import { PiCaretDownBold } from 'react-icons/pi';
import { Button } from './ui/button';

function CharacterModelCard() {
	return (
		<div className="flex h-full w-52 max-w-sm flex-col rounded-sm bg-slate-200 shadow-xl">
			<Avatar className="mx-auto mt-3 h-40 w-40">
				<AvatarImage
					src="https://github.com/shadcn.png"
					alt="@shadcn"
				/>
			</Avatar>
			<DropdownMenu>
				<DropdownMenuTrigger className="my-auto">
					<Button
						variant="default"
						className="max-w-sm">
						{/* TODO: Text over x wrapp ord show only initials */}
						John Doe
						<PiCaretDownBold className="ml-2" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Details</DropdownMenuItem>
					<DropdownMenuItem>Remove</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default CharacterModelCard;
