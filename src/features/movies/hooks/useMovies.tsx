import { nowPlayingAction } from "@/features/movies/api/now-playing.action";
import { popularMoviesAction } from "@/features/movies/api/popular.action";
import { topRatedMoviesAction } from "@/features/movies/api/top-rated.action";
import { upcomingMoviesAction } from "@/features/movies/api/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return topRatedMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, //24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
