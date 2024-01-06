import PackageCard from './PackageCard';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

function PackageList() {
	useQuery({
		queryKey: ['packages'],
		queryFn: async () => axios.get('/packages'),
	});
	return (
		<section>
			<h2 className="text-3xl font-bold text-primary">Packages</h2>
			<div
				className="my-3 flex w-full flex-col rounded-xl
						 border border-gray-400 bg-secondary px-8 py-6 shadow-2xl shadow-gray-200"
				style={{ minHeight: '40rem' }}>
				<h3 className="text-2xl font-bold">Bought</h3>
				<div className="mt-3 flex h-52 flex-row space-x-5">
					<PackageCard bought />
					<PackageCard bought />
				</div>
				<h3 className="mt-12 text-2xl font-bold">Available</h3>
				<div className="mt-3 flex h-52 flex-row space-x-5">
					<PackageCard />
					<PackageCard />
					<PackageCard />
				</div>
			</div>
		</section>
	);
}

export default PackageList;
