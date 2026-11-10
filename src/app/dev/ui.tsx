import { AppText, type TextVariant } from "@/shared/components/AppText";
import { Button } from "@/shared/components/Button";
import { Chip } from "@/shared/components/Chip";
import { IconButton } from "@/shared/components/IconButton";
import { Screen } from "@/shared/components/Screen";
import { SegmentedTabs } from "@/shared/components/SegmentedTabs";
import { TmdbImage } from "@/shared/components/TmdbImage";
import { useThemeStore, type ThemePreference } from "@/shared/theme/theme-store";
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

const chipOptions = ["Todo", "Películas", "Series", "Personas"];

const genreOptions = [
  "Todo",
  "Acción",
  "Aventura",
  "Animación",
  "Comedia",
  "Drama",
  "Fantasía",
  "Ciencia ficción",
  "Documental",
  "Terror",
  "Suspenso",
];

type ProfileTab = "fav" | "watch" | "rated" | "lists";

const profileTabs: { value: ProfileTab; label: string }[] = [
  { value: "fav", label: "Favoritos" },
  { value: "watch", label: "Por ver" },
  { value: "rated", label: "Calificadas" },
  { value: "lists", label: "Listas" },
];

const themeOptions: { value: ThemePreference; label: string }[] = [
  { value: "system", label: "Sistema" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
];

export default function DevUIScreen() {
  const [pressCount, setPressCount] = useState(0);
  const handlePress = () => setPressCount((count) => count + 1);
  const [iconPressCount, setIconPressCount] = useState(0);
  const handleIconPress = () => setIconPressCount((count) => count + 1);
  const [selectedChip, setSelectedChip] = useState("Todo");
  const [selectedGenre, setSelectedGenre] = useState("Todo");
  const [profileTab, setProfileTab] = useState<ProfileTab>("fav");
  const themePreference = useThemeStore((state) => state.preference);
  const setThemePreference = useThemeStore((state) => state.setPreference);

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        <AppText variant="display">Componentes UI</AppText>

        <View className="mt-6 gap-4">
          <AppText variant="title">Tema</AppText>
          <SegmentedTabs<ThemePreference>
            options={themeOptions}
            value={themePreference}
            onChange={setThemePreference}
          />
        </View>

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
        <View className="mt-6 gap-4">
          <AppText variant="title">Chips</AppText>
          <AppText variant="caption">En un View con flex-row y gap-2</AppText>
          <View className="flex-row flex-wrap gap-2">
            {chipOptions.map((label) => (
              <Chip
                key={label}
                label={label}
                selected={selectedChip === label}
                onPress={() => setSelectedChip(label)}
              />
            ))}
          </View>

          <AppText variant="caption">Géneros en un ScrollView horizontal</AppText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {genreOptions.map((label) => (
                <Chip
                  key={label}
                  label={label}
                  selected={selectedGenre === label}
                  onPress={() => setSelectedGenre(label)}
                  className="shrink-0"
                />
              ))}
            </View>
          </ScrollView>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Género seleccionado: {selectedGenre}
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Pestañas segmentadas</AppText>
          <SegmentedTabs<ProfileTab>
            options={profileTabs}
            value={profileTab}
            onChange={setProfileTab}
          />
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Selección: {profileTabs.find((tab) => tab.value === profileTab)?.label}
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Imágenes TMDB</AppText>
          <View className="flex-row flex-wrap gap-4">
            <View className="gap-2">
              <TmdbImage
                path="/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                size="w342"
                className="w-[124px] aspect-[2/3] rounded-[14px] border border-border"
                accessibilityLabel="Póster de The Dark Knight"
              />
              <AppText variant="caption">The Dark Knight</AppText>
            </View>
            <View className="gap-2">
              <TmdbImage
                path={null}
                size="w342"
                className="w-[124px] aspect-[2/3] rounded-[14px] border border-border"
              />
              <AppText variant="caption">Sin imagen</AppText>
            </View>
            <View className="gap-2">
              <TmdbImage
                path="/no-existe.jpg"
                size="w342"
                className="w-[124px] aspect-[2/3] rounded-[14px] border border-border"
              />
              <AppText variant="caption">Error de carga</AppText>
            </View>
            <View className="gap-2">
              <TmdbImage
                path={null}
                size="w185"
                fallbackIcon="person-outline"
                className="rounded-full w-16 h-16"
              />
              <AppText variant="caption">Persona sin foto</AppText>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
