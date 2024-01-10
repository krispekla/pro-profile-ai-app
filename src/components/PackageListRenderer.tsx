interface PackageListProps {
	title: string;
	sectionClass?: string;
	titleClass?: string;
	wrapperClass?: string;
	children?: React.ReactNode;
}

function PackageListRenderer({
	title,
	titleClass,
	wrapperClass,
	sectionClass,
	children,
}: PackageListProps) {
	return (
		<section className={sectionClass}>
			<h2 className={`text-3xl font-bold ${titleClass || 'text-primary'}`}>{title}</h2>
			<div
				className={`my-3 flex w-full flex-col rounded-xl border px-8 py-6 
				${wrapperClass || 'border-gray-400 bg-secondary'}
						 shadow-2xl shadow-gray-200`}
				style={{ minHeight: '20rem' }}>
				<div className="mt-3 flex h-52 flex-row space-x-5">{children}</div>
			</div>
		</section>
	);
}

export default PackageListRenderer;
