export class ImageFormatter {
  public static urlImage(value: string | null): string | null {
    if (!value) {
      return null;
    }
    return `https://image.tmdb.org/t/p/w500${value}`;
  }
}
