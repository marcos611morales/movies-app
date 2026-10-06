

export interface Movie {
	id: number;
	title: string;
	description: string;
	releaseDate: Date;
	rating: number;
	poster: string;
	backdrop: string
}

export interface CompleteMovie extends Movie {
	genders: string[];
	duration: number;
	budget: number;
	originalTitle: string;
	productionCompany: string[];
}