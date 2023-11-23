import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router';

function CharacterModelCardAdd() {
	const navigate = useNavigate();
	return (
		<div
			className="flex h-full w-52 max-w-sm cursor-pointer flex-col"
			onClick={() => navigate('/character/new')}>
			<div
				className="m-auto mt-3 flex h-40 w-40 rounded-full 
				border-2 border-dashed border-secondary-foreground hover:bg-secondary">
				<AiOutlinePlus className="m-auto h-20 w-20 text-secondary-foreground" />
			</div>
		</div>
	);
}

export default CharacterModelCardAdd;
