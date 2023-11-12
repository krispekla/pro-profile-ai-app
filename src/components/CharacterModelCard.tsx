import { Avatar, AvatarImage } from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';
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
