import { MovieMapper } from "@/features/movies/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/features/movies/types/movidedb-response";
import { tmdbClient } from "@/shared/api/tmdb-client";

export const popularMoviesAction = async () => {
  try {
    const { data } =
      await tmdbClient.get<MovieDBMoviesResponse>("/movie/popular");
    // console.log(JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    // console.log(movies)

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
