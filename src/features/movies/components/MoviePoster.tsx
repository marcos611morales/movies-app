import { useThemeColors } from "@/shared/theme/useThemeColors";
import Ionicons from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";

interface Props {
  id: number;
  poster: string | null;
  smallPoster?: boolean;
  clasName?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, clasName }: Props) => {
  const colors = useThemeColors();
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${clasName}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      {poster ? (
        <Image
          source={{ uri: poster }}
          className="shadow-lg rounded-2xl w-full h-full"
          style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
          }}
          resizeMode="cover"
        />
      ) : (
        <View
          className="rounded-2xl bg-surface-elevated items-center justify-center"
          style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
          }}
        >
          <Ionicons
            name="film-outline"
            size={smallPoster ? 28 : 48}
            color={colors.textMuted}
          />
        </View>
      )}
    </Pressable>
  );
};

export default MoviePoster;
