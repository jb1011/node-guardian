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

type IReward = {
	experience: number;
	gold: number;
}

export type IDetail = {
	cover: string;
	description: string;
	difficulty: number;
	experience: number;
	gold: number;
	id: number;
	rewards: IReward;
	skill: string;
	skillTree: string;
	title: string;
	type: string;
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