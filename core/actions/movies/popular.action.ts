import { tmdbClient } from "@/shared/api/tmdb-client";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movidedb-response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

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
