import { Cast } from "@/features/movies/types/cast";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Image, Text, View } from "react-native";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  const colors = useThemeColors();

  return (
    <View className="mx-10 w-[60px]">
      {actor.avatar ? (
        <Image
          source={{ uri: actor.avatar }}
          className="w-[100px] h-[150px] rounded-2xl shadow"
          resizeMode="cover"
        />
      ) : (
        <View className="w-[100px] h-[150px] rounded-2xl bg-surface-elevated items-center justify-center">
          <Ionicons name="person-outline" size={40} color={colors.textMuted} />
        </View>
      )}

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};
