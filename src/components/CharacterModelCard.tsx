import { Avatar, AvatarImage } from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { PiCaretDownBold } from 'react-icons/pi';

function CharacterModelCard() {
	return (
		<div className="flex h-full w-52 max-w-sm cursor-pointer flex-col rounded-sm">
			<Avatar className="mx-auto mt-3 h-40 w-40">
				<AvatarImage
					src="https://github.com/shadcn.png"
					alt="@shadcn"
				/>
			</Avatar>
			<DropdownMenu>
				<DropdownMenuTrigger className="mx-auto my-auto flex flex-nowrap items-center bg-primary py-2 pl-4 pr-2 text-secondary">
					<div className="max-w-sm flex-nowrap">John Doe</div>
					<PiCaretDownBold className="ml-3 text-lg" />
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
