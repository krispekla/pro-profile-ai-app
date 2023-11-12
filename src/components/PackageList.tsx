function PackageList() {
	return (
		<section>
			<h2 className="text-3xl font-light text-primary">Packages</h2>
			<div
				className="my-3 flex w-full flex-col
						 rounded-xl border border-secondary-foreground bg-secondary py-6 px-8"
				style={{ minHeight: '40rem' }}>
				<h3 className="text-2xl font-bold">Bought</h3>
				<div className="mt-3 flex h-52 flex-col"></div>
				<h3 className="mt-3 text-2xl font-bold">Available</h3>
				<div className="mt-3 flex h-52 flex-col"></div>
			</div>
		</section>
	);
}

export default PackageList;
