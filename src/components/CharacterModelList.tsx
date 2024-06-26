import CharacterModelCard from './CharacterModelCard';
import CharacterModelCardAdd from './CharacterModelCardAdd';
import CharacterModelListSkeleton from './skeletons/CharacterModelListSkeleton';
import { Key } from 'react';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

function CharacterModelList() {
	const {
		isError,
		isFetching,
		data: characters,
	} = useQuery({
		queryKey: ['characters'],
		queryFn: async () => axios.get('/character/list'),
	});

	if (isError) {
		return (
			<div className="mt-6 flex justify-center">
				<p>Service is currently down. Please try again later.</p>
			</div>
		);
	}
	if (isFetching) {
		return <CharacterModelListSkeleton />;
	}

	return (
		<section>
			<h2 className="text-3xl font-light text-primary">
				your<span className="mx-1 font-bold">Characters</span>
			</h2>
			<div
				className="my-3 flex h-72 w-full
						space-x-4 rounded-xl border border-gray-400 bg-secondary p-4
						pb-5">
				{characters?.data.length > 0 &&
					characters?.data.map((_: unknown, i: Key | null | undefined) => (
						<CharacterModelCard key={i} />
					))}
				<CharacterModelCardAdd />
			</div>
		</section>
	);
}

export default CharacterModelList;
