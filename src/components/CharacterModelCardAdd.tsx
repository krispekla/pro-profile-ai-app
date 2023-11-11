import { AiOutlinePlus } from 'react-icons/ai';

function CharacterModelCardAdd() {
	return (
		<div
			className="flex flex-col w-52 h-full max-w-sm border-4 
						border-dashed border-bg-slate-200 hover:bg-slate-100
						cursor-pointer
		">
			<AiOutlinePlus className="m-auto w-20 h-20 text-slate-400" />
		</div>
	);
}

export default CharacterModelCardAdd;
