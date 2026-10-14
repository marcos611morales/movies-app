export class DateFormatter {
  public static parseTmdbDate(value: string): Date | null {
    if (!value) {
      return null;
    }

    const [year, month, day] = value.split("-").map(Number);

    return new Date(year, month - 1, day);
  }
}
