import { MovieMapper } from "@/features/movies/mappers/movie.mapper";
import { CompleteMovie } from "@/features/movies/types/movie.interface";
import { MovieDBMovieResponse } from "@/features/movies/types/moviedb-movie.response";
import { tmdbClient } from "@/shared/api/tmdb-client";

export const getMovieByIdAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await tmdbClient.get<MovieDBMovieResponse>(`/movie/${id}`);
    // console.log(JSON.stringify(data, null, 2));

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw `Cannot load movie with id ${id}`;
  }
};
