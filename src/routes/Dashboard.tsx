import { useEffect, useState } from 'react';

import CharacterModelList from '@/components/CharacterModelList';
import GeneratedList from '@/components/GeneratedList';
import PackageList from '@/components/PackageList';
import axios from '@/lib/axios';

export default function Dashboard() {

	const [characterList, setCharacterList] = useState([]);

	useEffect(() => {
		axios
			.get('/characters')
			.then((response) => {
				setCharacterList(response.data);
			})
			.catch((error) => {
				console.error('Error fetching character list:', error);
			});
			console.log(characterList);
	}, []);
	return (
		<div className="container flex min-h-full w-full flex-col p-5">
			<CharacterModelList />
			<div className="flex items-center justify-end">
				<div className="w-5 h-5 rounded-full bg-yellow-300 mr-2"></div>
				<p>Selected Character</p>
			</div>
			<GeneratedList />
			<PackageList />
		</div>
	);
}
