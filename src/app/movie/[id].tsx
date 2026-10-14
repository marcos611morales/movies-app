import MovieCast from "@/features/movies/components/MovieCast";
import MovieDescription from "@/features/movies/components/MovieDescription";
import MovieHeader from "@/features/movies/components/MovieHeader";
import { useMovie } from "@/features/movies/hooks/useMovie";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);
  const colors = useThemeColors();

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color={colors.primary} size={30} />
      </View>
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
