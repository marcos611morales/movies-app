import MovieCast from "@/features/movies/components/MovieCast";
import MovieDescription from "@/features/movies/components/MovieDescription";
import MovieHeader from "@/features/movies/components/MovieHeader";
import { useMovie } from "@/features/movies/hooks/useMovie";
import { AppText } from "@/shared/components/AppText";
import { Screen } from "@/shared/components/Screen";
import { useT } from "@/shared/i18n/useT";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);
  const colors = useThemeColors();
  const t = useT();

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <Screen className="items-center justify-center">
        <AppText variant="caption" className="mb-4">
          {t("common.loading")}
        </AppText>
        <ActivityIndicator color={colors.primary} size={30} />
      </Screen>
    );
  }
  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
