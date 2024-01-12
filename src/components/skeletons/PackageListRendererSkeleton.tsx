import { Skeleton } from '@/components/ui/skeleton';

function PackageListRendererSkeleton() {
	return (
		<div
			className="my-3 flex w-full flex-col rounded-xl border px-8 py-6"
			style={{ minHeight: '20rem' }}>
			<div className="mt-3 flex h-52 flex-row space-x-5 overflow-hidden">
				{Array.from({ length: 4 }).map((_, index) => (
					<div
						key={index}
						className="relative h-52 w-72">
						<Skeleton className="absolute left-0 top-0 h-full w-full" />
					</div>
				))}
			</div>
		</div>
	);
}

export default PackageListRendererSkeleton;
