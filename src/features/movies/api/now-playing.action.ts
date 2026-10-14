import { MovieMapper } from "@/features/movies/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/features/movies/types/movidedb-response";
import { tmdbClient } from "@/shared/api/tmdb-client";

export const nowPlayingAction = async () => {
  try {
    const { data } =
      await tmdbClient.get<MovieDBMoviesResponse>("/movie/now_playing");
    // console.log(JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    // console.log(movies)

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
