import type { Translations } from "@/shared/i18n/locales/es";

export const en: Translations = {
  common: {
    seeAll: "See all",
    retry: "Retry",
    loading: "Please wait",
    appName: "Movies App",
  },
  home: {
    greeting: "Hi, {{name}}",
    sections: {
      nowPlaying: "Now playing",
      popular: "Popular",
      topRated: "Top Rated",
      upcoming: "Coming Soon",
    },
  },
  movie: {
    overview: "Synopsis",
    cast: "Cast",
  },
  rating: {
    a11yLabel: "Rating {{value}} out of 10",
    none: "Unrated",
  },
  profile: {
    titleCount_one: "{{count}} title",
    titleCount_other: "{{count}} titles",
  },
  language: {
    title: "Language",
    description:
      "Changes the app text and the language of titles, overviews and trailers.",
    note: "Region follows the language: it sets now playing, upcoming releases and where each title is streaming (Where to watch).",
    close: "Close",
    done: "Done",
  },
};
