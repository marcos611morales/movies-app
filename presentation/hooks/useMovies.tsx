import { useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "../../core/actions/movies/now-playing.actions";


export const useMovies = () => {

	// Queries
  	const nowPlayingQuery = useQuery({ 
		queryKey: ['movies', 'nowPlaying'], 
		queryFn: nowPlayingAction,
		staleTime: 1000 * 60 * 60 * 24, //24 horas
	 });

	 return {
		nowPlayingQuery,
	 };
}