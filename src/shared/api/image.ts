const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/";

export type TmdbImageSize = "w185" | "w342" | "w500" | "w780" | "original";

export function tmdbImage(
  path: string | null,
  size: TmdbImageSize,
): string | null {
  if (!path) {
    return null;
  }
  return `${TMDB_IMAGE_BASE}${size}${path}`;
}

// TODO(Fase 7–8): borrar cuando los mappers guarden paths
export class ImageFormatter {
  public static urlImage(value: string | null): string | null {
    if (!value) {
      return null;
    }
    return `${TMDB_IMAGE_BASE}w500${value}`;
  }
}
