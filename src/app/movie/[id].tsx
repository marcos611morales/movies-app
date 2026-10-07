import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import MovieDescription from "../../../presentation/components/movie/MovieDescription";
import MovieHeader from "../../../presentation/components/movie/MovieHeader";
import { useMovie } from "../../../presentation/hooks/useMovie";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
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
    </ScrollView>
  );
};

export default MovieScreen;
