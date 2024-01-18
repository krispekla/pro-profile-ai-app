import CharacterModelList from '@/components/CharacterModelList';
import GeneratedCard from '@/components/GeneratedCard';
import { GeneratedPackageStatusEnum } from '@/types/enum';
import PackageCard from '@/components/PackageCard';
import { PackageItem } from '@/types/package';
import PackageListRenderer from '@/components/PackageListRenderer';
import PackageListRendererSkeleton from '@/components/skeletons/PackageListRendererSkeleton';
import axios from '@/lib/axios';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

export interface PackageGenerated {
	id: number;
	status: GeneratedPackageStatusEnum;
	cover_img_url: string;
	updated: string;
	package_id: number;
}

export default function Dashboard() {
	const {
		isFetching: isFetchingPackageListing,
		isSuccess,
		data: packages,
	} = useQuery({
		queryKey: ['packages'],
		queryFn: async () => axios.get('/packages/listing'),
	});

	const { isFetching: isFetchingGenerated, data: generatedPackages } = useQuery({
		queryKey: ['packages-generated'],
		queryFn: async () => axios.get('/packages/generated'),
	});

	const filteredGeneratedPackages = useMemo(() => {
		if (generatedPackages === undefined || !generatedPackages?.data) {
			return []
		}
		return generatedPackages?.data.filter((p: PackageGenerated) =>
			[GeneratedPackageStatusEnum.Generated, GeneratedPackageStatusEnum.Processing].includes(
				p.status
			)
		);
	}, [generatedPackages]);

	const notUsedPackages = useMemo(() => {
		if (generatedPackages === undefined || !generatedPackages?.data) {
			return []
		}
		return generatedPackages?.data.filter(
			(p: PackageGenerated) => p.status !== GeneratedPackageStatusEnum.Generated
		);
	}, [generatedPackages]);

	const productListingExist = isSuccess && packages?.data.length > 0;

	const generatedPcksExist =
		productListingExist &&
		generatedPackages?.data?.filter(
			(p: PackageGenerated) => p.status === GeneratedPackageStatusEnum.Generated
		).length > 0;
	const pckgNotUsedExist =
		productListingExist &&
		generatedPackages?.data?.filter(
			(p: PackageGenerated) => p.status !== GeneratedPackageStatusEnum.Generated
		).length > 0;
	return (
		<div className="container flex min-h-full w-full flex-col p-5">
			<CharacterModelList />
			{isFetchingGenerated && (
				<>
					<PackageListRendererSkeleton />
					<PackageListRendererSkeleton />
				</>
			)}
			{generatedPcksExist && (
				<PackageListRenderer
					title="Generated"
					sectionClass="mt-12"
					titleClass="text-green-400"
					wrapperClass="border-green-300 bg-green-50 shadow-2xl shadow-green-200">
					{filteredGeneratedPackages.map((pckg: PackageGenerated) => (
						<GeneratedCard
							key={`generated-${pckg.id}${pckg.cover_img_url}`}
							id={pckg.id}
							packageTitle={packages?.data.find((p: PackageItem) => p.id === pckg.package_id).Name}
							characterName="John Doe"
						/>
					))}
				</PackageListRenderer>
			)}
			{pckgNotUsedExist && (
				<PackageListRenderer
					title="Ready to use packages"
					sectionClass="mt-12"
					wrapperClass="border-yellow-300 bg-yellow-50 shadow-2xl shadow-yellow-200">
					{notUsedPackages?.map((pckg: PackageGenerated) => (
						<PackageCard
							bought={true}
							key={`not-used-${pckg.id}${pckg.cover_img_url}`}
							package={packages?.data.find((p: PackageItem) => p.id === pckg.package_id)}
							coverImgURL={pckg.cover_img_url}
						/>
					))}
				</PackageListRenderer>
			)}
			{isFetchingPackageListing && <PackageListRendererSkeleton />}
			{productListingExist && (
				<PackageListRenderer
					title="Packages"
					sectionClass="mt-12"
					wrapperClass="border-cyan-300 bg-cyan-50 shadow-2xl shadow-cyan-200">
					{packages?.data.map((pckg: PackageItem) => (
						<PackageCard
							key={pckg.id}
							package={pckg}
						/>
					))}
				</PackageListRenderer>
			)}
		</div>
	);
}
