import { CastMapper } from "@/features/movies/mappers/cast.mapper";
import { MovieDBCreditsResponse } from "@/features/movies/types/moviedb-creditsResponse";
import { tmdbClient } from "@/shared/api/tmdb-client";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await tmdbClient.get<MovieDBCreditsResponse>(
      `/movie/${movieId}/credits`,
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cant load cast by id";
  }
};
