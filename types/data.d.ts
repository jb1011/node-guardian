export type IData = {
	cover: string;
	difficulty: number;
	experience: number;
	gold: number;
	id: number;
	skill: string;
	skillTree: string;
	title: string;
	type: string;
}

export type IDetail = {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: Array<string>;
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

export interface GuardianProp {
	data: IData[];
}

export interface GuardianSingleProp {
	data: IData;
}

export interface DetailProp {
	data: IDetail;
}