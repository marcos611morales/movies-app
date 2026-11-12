import MainSlideShow from "@/features/movies/components/MainSlideShow";
import MovieHorizontalList from "@/features/movies/components/MovieHorizontalList";
import { useMovies } from "@/features/movies/hooks/useMovies";
import { AppText } from "@/shared/components/AppText";
import { Screen } from "@/shared/components/Screen";
import { useT } from "@/shared/i18n/useT";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const colors = useThemeColors();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  const t = useT();

  // // TMDB puede repetir películas entre páginas; se eliminan duplicados por id
  // const topRatedMovies = [
  // 	...new Map(
  // 		(topRatedQuery.data?.pages.flat() ?? []).map((movie) => [movie.id, movie])
  // 	).values(),
  // ];

  if (nowPlayingQuery.isLoading) {
    return (
      <Screen className="items-center justify-center">
        <ActivityIndicator color={colors.primary} size={40} />
      </Screen>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <AppText variant="display" className="px-4 mb-2">
          {t("common.appName")}
        </AppText>

        {__DEV__ && (
          <Link href="/dev/ui" className="px-4 py-3 text-primary">
            Ver componentes UI
          </Link>
        )}

        {/* Carrusel de imágenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title={t("home.sections.popular")}
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Top Rater */}
        <MovieHorizontalList
          title={t("home.sections.topRated")}
          // movies={topRatedMovies}
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title={t("home.sections.upcoming")}
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
