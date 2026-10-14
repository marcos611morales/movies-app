import { MovieMapper } from "@/features/movies/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/features/movies/types/movidedb-response";
import { tmdbClient } from "@/shared/api/tmdb-client";

export const upcomingMoviesAction = async () => {
  try {
    const { data } =
      await tmdbClient.get<MovieDBMoviesResponse>("/movie/upcoming");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load Upcoming movies";
  }
};
