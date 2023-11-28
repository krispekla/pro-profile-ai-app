import GeneratedCard from './GeneratedCard';

export default function GeneratedList() {
	return (
		<section className="my-8 mb-24">
			<h2 className="text-3xl font-bold text-green-400">Generated</h2>
			<div
				className="my-3 flex w-full flex-col rounded-xl border
						 border-green-300 bg-green-50 px-8 py-6 shadow-2xl shadow-green-200"
				style={{ minHeight: '20rem' }}>
				<div className="mt-3 flex h-52 flex-row space-x-5">
					<GeneratedCard />
					<GeneratedCard />
				</div>
			</div>
		</section>
	);
}
