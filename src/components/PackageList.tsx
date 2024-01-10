import { GeneratedPackageStatusEnum } from '@/types/enum';
import PackageCard from './PackageCard';
import axios from '@/lib/axios';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

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

	const filteredGeneratedPackages = useMemo(() => {
		return generatedPackages?.data.filter((p: PackageGenerated) =>
			[GeneratedPackageStatusEnum.Generated, GeneratedPackageStatusEnum.Processing].includes(
				p.status
			)
		);
	}, [generatedPackages]);

	const filteredGeneratedPackagesNotUsed = useMemo(() => {
		return generatedPackages?.data.filter(
			(p: PackageGenerated) => p.status !== GeneratedPackageStatusEnum.Generated
		);
	}, [generatedPackages]);

	const productListingExist = isSuccess && packages?.data.length > 0;

	const generatedPcksExist =
		productListingExist &&
		generatedPackages?.data.filter(
			(p: PackageGenerated) => p.status === GeneratedPackageStatusEnum.Generated
		).length > 0;
	const pckgNotUsedExist =
		productListingExist &&
		generatedPackages?.data.filter(
			(p: PackageGenerated) => p.status !== GeneratedPackageStatusEnum.Generated
		).length > 0;
	return (
		<section>
			<h2 className="text-3xl font-bold text-primary">Packages</h2>
			<div
				className="my-3 flex w-full flex-col rounded-xl
						 border border-gray-400 bg-secondary px-8 py-6 shadow-2xl shadow-gray-200"
				style={{ minHeight: '40rem' }}>
				<h3 className="text-2xl font-bold">Bought</h3>
				{generatedPcksExist && (
					<>
						<h3 className="text-1xl font-bold">Generated</h3>
						<div className="mt-3 flex h-52 flex-row space-x-5">
							{filteredGeneratedPackages.map((pckg: PackageGenerated) => (
								<PackageCard
									key={`used-${pckg.id}`}
									package={packages?.data.find((p: PackageItem) => p.ID === pckg.package_id)}
									coverImgURL={pckg.cover_img_url}
								/>
							))}
						</div>
					</>
				)}
				{pckgNotUsedExist && (
					<>
						<h3 className="text-1xl font-bold mt-5">Not used</h3>
						<div className="mt-3 flex h-52 flex-row space-x-5">
							{filteredGeneratedPackagesNotUsed.map((pckg: PackageGenerated) => (
								<PackageCard
									key={`not-used-${pckg.id}${pckg.cover_img_url}`}
									package={packages?.data.find((p: PackageItem) => p.ID === pckg.package_id)}
									coverImgURL={pckg.cover_img_url}
								/>
							))}
						</div>
					</>
				)}
				<h3 className="mt-12 text-2xl font-bold">Available</h3>
				<div className="mt-3 flex h-52 flex-row space-x-5">
					{productListingExist &&
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
