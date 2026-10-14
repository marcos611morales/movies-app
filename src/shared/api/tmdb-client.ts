import axios from "axios";

// eslint-disable-next-line import/no-named-as-default-member
export const tmdbClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: "es-MX",
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});
