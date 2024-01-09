import { GeneratedPackageStatusEnum } from '@/types/enum';
import PackageCard from './PackageCard';
import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

// TODO: Create DTO that will combine all Packages, bought, available etc.
export interface PackageItem {
	ID: number;
	Name: string;
	Description: string;
	CoverImgURL: string;
	Created: string;
}

export interface PackageGenerated {
	id: number;
	status: GeneratedPackageStatusEnum;
	cover_img_url: string;
	updated: string;
	package_id: number;
}

function PackageList() {
	const { isSuccess, data: packages } = useQuery({
		queryKey: ['packages'],
		queryFn: async () => axios.get('/packages/listing'),
	});

	const { data: generatedPackages } = useQuery({
		queryKey: ['packages-generated'],
		queryFn: async () => axios.get('/packages/generated'),
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
					{/* <PackageCard bought />
					<PackageCard bought /> */}
				</div>
				<h3 className="mt-12 text-2xl font-bold">Available</h3>
				<div className="mt-3 flex h-52 flex-row space-x-5">
					{isSuccess &&
						packages?.data.map((pckg: PackageItem) => (
							<PackageCard
								key={pckg.ID}
								package={pckg}
							/>
						))}
				</div>
			</div>
		</section>
	);
}

export default PackageList;
