import { CompleteMovie } from "../../../infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "../../../infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";



export const getMovieByIdAction = async( id: number | string): Promise<CompleteMovie> => {
	try {
			const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
			// console.log(JSON.stringify(data, null, 2));
	

			return MovieMapper.fromTheMovieDBToCompleteMovie(data);
		} catch (error) {
			console.log(error);
			throw 'Cannot load now playing movies'
		}
}