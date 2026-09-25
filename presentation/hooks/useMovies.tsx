import { useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "../../core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "../../core/actions/movies/popular.action";
import { topRatedMoviesAction } from "../../core/actions/movies/top-Rated.action";
import { upcomingMoviesAction } from "../../core/actions/movies/upcoming.action copy";


export const useMovies = () => {

	// Queries
  	const nowPlayingQuery = useQuery({ 
		queryKey: ['movies', 'nowPlaying'], 
		queryFn: nowPlayingAction,
		staleTime: 1000 * 60 * 60 * 24, //24 horas
	});
	
  	const popularQuery = useQuery({
		queryKey: ['movies', 'popular'], 
		queryFn: popularMoviesAction,
		staleTime: 1000 * 60 * 60 * 24, //24 horas
	});


  	const topRatedQuery = useQuery({
		queryKey: ['movies', 'topRater'], 
		queryFn: topRatedMoviesAction,
		staleTime: 1000 * 60 * 60 * 24, //24 horas
	});

  	const upcomingQuery = useQuery({
		queryKey: ['movies', 'upcoming'], 
		queryFn: upcomingMoviesAction,
		staleTime: 1000 * 60 * 60 * 24, //24 horas
	});

	 return {
		nowPlayingQuery,
		popularQuery,
		topRatedQuery,
		upcomingQuery
	 };
}