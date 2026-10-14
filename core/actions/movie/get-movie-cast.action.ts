import { tmdbClient } from "@/shared/api/tmdb-client";
import { MovieDBCreditsResponse } from "../../../infrastructure/interfaces/moviedb-creditsResponse";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";

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
