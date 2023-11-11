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
		<div className="flex flex-col shadow-xl bg-slate-200 w-52 h-full max-w-sm rounded-sm">
			<Avatar className="mx-auto w-40 h-40 mt-3">
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
