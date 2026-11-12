import { CompleteMovie } from "@/features/movies/types/movie.interface";
import { useFormat } from "@/shared/i18n/useFormat";
import { useT } from "@/shared/i18n/useT";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  const format = useFormat();
  const t = useT();

  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genders.join(", ")}</Text>
      </View>

      <Text className="font-bold mt-5">{t("movie.overview")}</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>
      <Text className="font-bold mt-2 text-2xl">
        {format.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
