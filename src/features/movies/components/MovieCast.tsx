import { ActorCard } from "@/features/movies/components/ActorCard";
import { Cast } from "@/features/movies/types/cast";
import { useT } from "@/shared/i18n/useT";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  const t = useT();

  return (
    <View className="mt-5 mb-52">
      <Text className="font-bold text-2xl px-5">{t("movie.cast")}</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
