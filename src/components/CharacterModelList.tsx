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
				className="my-3 flex h-72 w-full
						space-x-4 rounded-xl border border-slate-600 bg-slate-50 p-4
						pb-5">
				{[1, 2, 3].map((_, i) => (
					<CharacterModelCard key={i} selected={i === 0} />
				))}
				<CharacterModelCardAdd />
			</div>
		</section>
	);
}

export default CharacterModelList;
