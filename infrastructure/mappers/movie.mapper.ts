import { Result } from "../interfaces/movidedb-response";
import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";



export class MovieMapper {
	static fromTheMovieDBToMovie = (movie: Result): Movie => {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			rating: movie.vote_average
		};
	};

	static fromTheMovieDBToCompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			rating: movie.vote_average,
			budget: movie.budget,
			duration: movie.runtime,
			genders: movie.genres.map(g => g.name),
			originalTitle: movie.original_title,
			productionCompany: movie.production_companies.map(c => c.name),
		};
	}
}