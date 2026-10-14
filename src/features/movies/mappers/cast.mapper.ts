import { Cast } from "@/features/movies/types/cast";
import { MovieDBCast } from "@/features/movies/types/moviedb-creditsResponse";
import { ImageFormatter } from "@/shared/api/image";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: ImageFormatter.urlImage(actor.profile_path),
    };
  }
}
