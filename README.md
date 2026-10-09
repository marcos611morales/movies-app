# Movies App

A movies and TV shows mobile app built with React Native and Expo, powered by [The Movie Database (TMDB)](https://www.themoviedb.org/) API. It's a practice project: I'm building it by hand, phase by phase, to learn the Expo ecosystem.

> 🚧 **Work in progress.**

## Features

What the app will include once the plan is complete:

- **Home**: now playing, popular, top rated and upcoming movies and TV shows.
- **Movie and TV show details**: overview, cast, trailer, where to watch, recommendations and seasons.
- **People**: biography and filmography.
- **Search**: movies, TV shows and people in a single search.
- **Explore**: discover titles by genre.
- **TMDB account**: sign in, favorites, watchlist, ratings and custom lists.
- **Guest mode**: browse and rate without an account.
- **Light and dark themes**.

## Design

The reference screens live in [`.claude/design/`](.claude/design/): 12 screens in dark and light themes, made in Claude Design with the "Marquesina" palette. Open [`.claude/design/index.html`](.claude/design/index.html) in your browser to see the full gallery. More details in its [README](.claude/design/README.md).

## Tech stack

- [Expo](https://expo.dev) SDK 57 · React Native 0.86 · React 19 · TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- [NativeWind](https://www.nativewind.dev/) 4 + Tailwind CSS 3
- [TanStack Query](https://tanstack.com/query) 5 + axios
- expo-image, expo-linear-gradient, expo-web-browser, react-native-reanimated-carousel, Ionicons

## Getting started

Requirements: Node.js, [pnpm](https://pnpm.io/), and an iOS simulator, an Android emulator or a device with a development build.

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create your `.env` file from the template and add your TMDB API key (get one at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)):

   ```bash
   cp .env.template .env
   ```

3. Start the app:

   ```bash
   pnpm start      # or: pnpm ios / pnpm android / pnpm web
   ```

### Other commands

```bash
pnpm lint           # ESLint (expo lint)
npx tsc --noEmit    # type check
```

## Project structure

The code is being migrated to a feature-based architecture:

```
src/
  app/        # expo-router routes
  features/   # auth, movies, tv, people, search, discover, account
  shared/     # TMDB client, theme, base components, hooks and utilities
```

Data flows **action → mapper → hook → component**.

## Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. Streaming availability data is provided by [JustWatch](https://www.justwatch.com/).

## License

[MIT](LICENSE) © 2026 Marcos Morales
