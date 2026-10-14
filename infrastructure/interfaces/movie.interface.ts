export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date | null;
  rating: number;
  poster: string | null;
  backdrop: string | null;
}

export interface CompleteMovie extends Movie {
  genders: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompany: string[];
}
