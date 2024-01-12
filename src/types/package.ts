export type PackageItem = {
	id: number;
	name: string;
	description: string;
	cover_img_url: string;
	created: string;
	pricing: Array<PackagePrice>;
	imgs: { url: string };
};

export type PackagePrice = {
	ID: number;
	PackageID: number;
	Amount: number;
	Currency: string;
	StripeProductID: string;
};
