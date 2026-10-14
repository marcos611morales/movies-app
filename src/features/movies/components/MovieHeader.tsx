import { useThemeColors } from "@/shared/theme/useThemeColors";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface Props {
  poster: string | null;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const colors = useThemeColors();

  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      {/* Botón de Regreso */}
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 42,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          {poster ? (
            <Image
              source={{ uri: poster }}
              resizeMode="cover"
              className="flex-1"
            />
          ) : (
            <View className="flex-1 bg-surface-elevated items-center justify-center">
              <Ionicons
                name="film-outline"
                size={64}
                color={colors.textMuted}
              />
            </View>
          )}
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="font-normal"> {originalTitle}</Text>
        <Text className="font-semibold text-2xl"> {title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
