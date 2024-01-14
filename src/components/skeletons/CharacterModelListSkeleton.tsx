import { Skeleton } from '@/components/ui/skeleton';

function CharacterModelListSkeleton() {
	return (
		<div className="my-3 flex h-72 w-full space-x-12 justify-between overflow-hidden rounded-xl border p-4 pb-5">
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className="relative h-72">
					<div className={`flex h-full w-52 max-w-sm cursor-pointer flex-col rounded-sm `}>
						<Skeleton className="mx-auto mt-3 h-40 w-40 rounded-full"></Skeleton>
						<Skeleton className=" mx-auto mt-6 h-10 w-32"></Skeleton>
					</div>
				</div>
			))}
		</div>
	);
}

export default CharacterModelListSkeleton;
