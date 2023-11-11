import { AiOutlinePlus } from 'react-icons/ai';

function CharacterModelCardAdd() {
	return (
		<div
			className="border-bg-slate-200 flex h-full w-52 max-w-sm cursor-pointer flex-col border-4 border-dashed hover:bg-slate-100
		">
			<AiOutlinePlus className="m-auto h-20 w-20 text-slate-400" />
		</div>
	);
}

export default CharacterModelCardAdd;
