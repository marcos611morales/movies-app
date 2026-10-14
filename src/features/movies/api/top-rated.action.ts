import { MovieMapper } from "@/features/movies/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/features/movies/types/movidedb-response";
import { tmdbClient } from "@/shared/api/tmdb-client";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await tmdbClient.get<MovieDBMoviesResponse>(
      "/movie/top_rated",
      {
        params: {
          page: page,
        },
      },
    );

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top Rater movies";
  }
};
