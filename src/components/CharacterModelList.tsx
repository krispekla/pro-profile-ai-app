import CharacterModelCard from './CharacterModelCard';
import CharacterModelCardAdd from './CharacterModelCardAdd';

function CharacterModelList() {
	return (
		<section>
			<h2 className="text-3xl font-light">
				Your<span className="mx-1 font-bold text-slate-600">AI</span>
				<span className="text-slate-700">characters:</span>
			</h2>
			<div
				className="border border-slate-600 h-72 w-full
						bg-slate-50 rounded-xl my-3 pb-5 p-4 flex
						space-x-4">
				{[1, 2, 3].map((_, i) => (
					<CharacterModelCard key={i} />
				))}
				<CharacterModelCardAdd />
			</div>
		</section>
	);
}

export default CharacterModelList;
