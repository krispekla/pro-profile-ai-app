import CharacterModelList from '@/components/CharacterModelList';
import GeneratedList from '@/components/GeneratedList';
import PackageList from '@/components/PackageList';

export default function Dashboard() {
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
