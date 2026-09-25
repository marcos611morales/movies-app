
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movidedb-response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";


export const topRatedMoviesAction = async() => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated')

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);		

		return movies;

	} catch (error) {
		console.log(error);
		throw 'Cannot load top Rater movies'
	}
}