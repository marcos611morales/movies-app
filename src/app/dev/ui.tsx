import { AppText, type TextVariant } from "@/shared/components/AppText";
import { Button } from "@/shared/components/Button";
import { IconButton } from "@/shared/components/IconButton";
import { Screen } from "@/shared/components/Screen";
import { cn } from "@/shared/utils/cn";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const textVariants: TextVariant[] = [
  "display",
  "title",
  "body",
  "bodyStrong",
  "caption",
  "label",
  "overline",
  "mono",
];

export default function DevUIScreen() {
  const [pressCount, setPressCount] = useState(0);
  const handlePress = () => setPressCount((count) => count + 1);
  const [iconPressCount, setIconPressCount] = useState(0);
  const handleIconPress = () => setIconPressCount((count) => count + 1);

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        <AppText variant="display">Componentes UI</AppText>

        <View className="mt-6 gap-4">
          <AppText variant="title">Tipografía</AppText>

          {textVariants.map((variant) => (
            <AppText key={variant} variant={variant}>
              {variant}: Texto de ejemplo
            </AppText>
          ))}
        </View>

        <View className="mt-6 gap-4">
          <AppText variant="title">Botones</AppText>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Pulsaciones: {pressCount}
          </AppText>

          {(["primary", "secondary"] as const).map((variant) => (
            <View key={variant} className="gap-3">
              <AppText variant="overline">{variant}</AppText>
              <Button label="Grande" variant={variant} onPress={handlePress} />
              <Button
                label="Mediano con icono"
                variant={variant}
                size="md"
                icon="add-outline"
                onPress={handlePress}
              />
              <Button
                label="Cargando"
                variant={variant}
                loading
                onPress={handlePress}
              />
              <Button
                label="Deshabilitado"
                variant={variant}
                disabled
                onPress={handlePress}
              />
            </View>
          ))}

          <Button
            label="Altura personalizada: 50 px"
            icon="person-outline"
            className="h-[50px]"
            onPress={handlePress}
          />
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Botones de ícono</AppText>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Pulsaciones de íconos: {iconPressCount}
          </AppText>

          {(["surface", "elevated", "overlay"] as const).map((variant) => (
            <View key={variant} className="gap-3">
              <AppText variant="overline">{variant}</AppText>
              <View
                className={cn(
                  "flex-row items-center gap-4",
                  variant === "overlay" && "rounded-2xl bg-primary p-4",
                )}
              >
                <IconButton
                  icon="play"
                  variant={variant}
                  accessibilityLabel={`Probar ${variant} con ícono de 22 píxeles`}
                  onPress={handleIconPress}
                />
                <IconButton
                  icon="arrow-back"
                  variant={variant}
                  iconSize={20}
                  accessibilityLabel={`Probar ${variant} con ícono de 20 píxeles`}
                  onPress={handleIconPress}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
