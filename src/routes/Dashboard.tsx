import CharacterModelList from '@/components/CharacterModelList';
import GeneratedCard from '@/components/GeneratedCard';
import { GeneratedPackageStatusEnum } from '@/types/enum';
import PackageCard from '@/components/PackageCard';
import { PackageItem } from '@/types/package';
import PackageListRenderer from '@/components/PackageListRenderer';
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

	const notUsedPackages = useMemo(() => {
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
		<div className="container flex min-h-full w-full flex-col p-5">
			<CharacterModelList />
			<div className="flex items-center justify-end">
				<div className="mr-2 h-5 w-5 rounded-full bg-yellow-300"></div>
				<p>Selected Character</p>
			</div>
			{generatedPcksExist && (
				<PackageListRenderer
					title="Generated"
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
					sectionClass="mt-6">
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
			{productListingExist && (
				<PackageListRenderer title="Packages">
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
