import { Avatar, AvatarImage } from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { PiCaretDownBold } from 'react-icons/pi';

interface CharacterModelCardProps {
	selected?: boolean;
}

function CharacterModelCard({ selected }: CharacterModelCardProps) {
	return (
		<div
			className={`flex h-full w-52 max-w-sm cursor-pointer flex-col rounded-sm 
			hover:bg-yellow-100
			 ${selected && 'rounded-lg border-2 border-yellow-300 bg-yellow-100'}`}>
			<Avatar className="mx-auto mt-3 h-40 w-40">
				<AvatarImage
					src="https://github.com/shadcn.png"
					alt="@shadcn"
				/>
			</Avatar>
			<DropdownMenu>
				<DropdownMenuTrigger className="mx-auto my-auto flex flex-nowrap bg-primary pl-4 pr-2 py-2 text-secondary items-center">
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
