import { Cast } from "@/features/movies/types/cast";
import { AppText } from "@/shared/components/AppText";
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
        <AppText variant="caption">{actor.character}</AppText>
      </View>
    </View>
  );
};
