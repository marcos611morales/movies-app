
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movidedb-response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";

interface Options {
	page?: number; 
	limit?: number;
}

export const topRatedMoviesAction = async({page = 1, limit = 10}: Options) => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
			params: {
				page: page
			}
		});

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);		

		return movies;

	} catch (error) {
		console.log(error);
		throw 'Cannot load top Rater movies'
	}
}