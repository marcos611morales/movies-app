import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movidedb-response";
import { movieApi } from "../../api/movie-api";


export const nowPlayingAction = async() => {
	try {
		const {data} = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
		console.log(data);

		return [];
	} catch (error) {
		console.log(error);
		throw 'Cannot load now playing movies'
	}
}