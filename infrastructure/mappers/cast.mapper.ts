import { ImageFormatter } from "../../config/helpers/image";
import { Cast } from "../interfaces/cast";
import { MovieDBCast } from "../interfaces/moviedb-creditsResponse";

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
