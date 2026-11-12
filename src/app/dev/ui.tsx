import { useSettingsStore } from "@/features/settings/store/settings-store";
import { AppText, type TextVariant } from "@/shared/components/AppText";
import { Button } from "@/shared/components/Button";
import { Chip } from "@/shared/components/Chip";
import { EmptyState } from "@/shared/components/EmptyState";
import { ErrorState } from "@/shared/components/ErrorState";
import { HorizontalList } from "@/shared/components/HorizontalList";
import { IconButton } from "@/shared/components/IconButton";
import { InfoTile } from "@/shared/components/InfoTile";
import { ListRow } from "@/shared/components/ListRow";
import { PosterCard } from "@/shared/components/PosterCard";
import { RatingBadge } from "@/shared/components/RatingBadge";
import { RatingRing } from "@/shared/components/RatingRing";
import { Screen } from "@/shared/components/Screen";
import { SectionHeader } from "@/shared/components/SectionHeader";
import { SegmentedTabs } from "@/shared/components/SegmentedTabs";
import { Skeleton } from "@/shared/components/Skeleton";
import { TmdbImage } from "@/shared/components/TmdbImage";
import type { LanguagePreference } from "@/shared/i18n/languages";
import { useAppLanguage } from "@/shared/i18n/useAppLanguage";
import { useFormat } from "@/shared/i18n/useFormat";
import { useT } from "@/shared/i18n/useT";
import {
  useThemeStore,
  type ThemePreference,
} from "@/shared/theme/theme-store";
import { cn } from "@/shared/utils/cn";
import { useLocales } from "expo-localization";
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

const languageOptions: { value: LanguagePreference; label: string }[] = [
  { value: "system", label: "Sistema" },
  { value: "es-MX", label: "Español" },
  { value: "en-US", label: "English" },
];

const ratingExamples = [8.4, 6.2, 3.9, 0];

const infoTileExamples = [
  { label: "Estreno", value: "14 mar 2025" },
  { label: "Duración", value: "2 h 14 min" },
  { label: "Presupuesto", value: "$18,000,000" },
  { label: "Recaudación", value: "$64,500,000" },
  { label: "Idioma original", value: "Portugués" },
  { label: "Estado", value: "Estrenada" },
];

const posterExamples = [
  {
    posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    title: "The Dark Knight",
    year: 2008,
    vote: 9,
  },
  {
    posterPath: null,
    title: "Película sin póster con un título muy largo",
    year: 2026,
    vote: 0,
  },
  {
    posterPath: null,
    title: "Sin año ni calificación",
  },
];

const horizontalPosterExamples = Array.from(
  { length: 10 },
  (_, index) => posterExamples[index % posterExamples.length],
);

export default function DevUIScreen() {
  const t = useT();
  const format = useFormat();
  const [pressCount, setPressCount] = useState(0);
  const handlePress = () => setPressCount((count) => count + 1);
  const [iconPressCount, setIconPressCount] = useState(0);
  const handleIconPress = () => setIconPressCount((count) => count + 1);
  const [selectedChip, setSelectedChip] = useState("Todo");
  const [selectedGenre, setSelectedGenre] = useState("Todo");
  const [profileTab, setProfileTab] = useState<ProfileTab>("fav");
  const [lastPosterTitle, setLastPosterTitle] = useState<string | null>(null);
  const [listEndCount, setListEndCount] = useState(0);
  const [sectionActionCount, setSectionActionCount] = useState(0);
  const [languageRowPressCount, setLanguageRowPressCount] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);
  const [emptyActionCount, setEmptyActionCount] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const handleEmptyAction = () => setEmptyActionCount((count) => count + 1);
  const handleSectionAction = () => setSectionActionCount((count) => count + 1);
  const themePreference = useThemeStore((state) => state.preference);
  const setThemePreference = useThemeStore((state) => state.setPreference);
  const languagePreference = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);
  const appLanguage = useAppLanguage();
  const locales = useLocales();

  const listRowExamples = [
    {
      label: "Idioma",
      value: "Español",
      onPress: () => setLanguageRowPressCount((count) => count + 1),
    },
    { label: "Región", value: "México" },
    {
      label: "Tema",
      right: (
        <View className="w-[220px]">
          <SegmentedTabs<ThemePreference>
            options={themeOptions}
            value={themePreference}
            onChange={setThemePreference}
          />
        </View>
      ),
    },
  ];

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
          <AppText variant="title">Idioma</AppText>
          <SegmentedTabs<LanguagePreference>
            options={languageOptions}
            value={languagePreference}
            onChange={setLanguage}
          />
          <AppText variant="mono">preferencia: {languagePreference}</AppText>
          <AppText variant="mono">efectivo: {appLanguage}</AppText>
          <AppText variant="mono">
            teléfono: {locales.map((locale) => locale.languageTag).join(", ")}
          </AppText>
          <AppText>{t("common.seeAll")}</AppText>
          <AppText>{t("home.greeting", { name: "Marcos" })}</AppText>
          <AppText>{t("profile.titleCount", { count: 1 })}</AppText>
          <AppText>{t("profile.titleCount", { count: 3 })}</AppText>
          <AppText variant="mono">
            Fecha: {format.date(new Date(2025, 2, 14))}
          </AppText>
          <AppText variant="mono">
            Presupuesto: {format.currency(18000000)}
          </AppText>
          <AppText variant="mono">Cantidad: {format.number(3214)}</AppText>
          <AppText variant="mono">Calificación: {format.rating(8.4)}</AppText>
        </View>

        <View className="mt-6 gap-4">
          <AppText variant="title">Esqueletos de carga</AppText>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            {showSkeletons
              ? "Cargando datos de prueba…"
              : "Carga de prueba terminada."}
          </AppText>
          {showSkeletons && (
            <>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-3">
                  {[0, 1, 2].map((index) => (
                    <View key={index} className="w-[124px] gap-2">
                      <Skeleton className="w-[124px] aspect-[2/3] rounded-[14px]" />
                      <Skeleton className="h-3.5 w-24 rounded" />
                      <Skeleton className="h-3 w-12 rounded" />
                    </View>
                  ))}
                </View>
              </ScrollView>
              <Skeleton className="h-14 w-14 rounded-full" />
            </>
          )}
          <AppText variant="caption">
            Para probar Reducir movimiento, reinicia Expo Go después de cambiar
            el ajuste del simulador.
          </AppText>
          <Button
            label={showSkeletons ? "Ocultar esqueletos" : "Mostrar esqueletos"}
            variant="secondary"
            size="md"
            onPress={() => setShowSkeletons((show) => !show)}
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

          <AppText variant="caption">
            Géneros en un ScrollView horizontal
          </AppText>
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
            Selección:{" "}
            {profileTabs.find((tab) => tab.value === profileTab)?.label}
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
        <View className="mt-6 gap-4">
          <AppText variant="title">Badges de calificación</AppText>
          {(["overlay", "inline"] as const).map((variant) => (
            <View key={variant} className="gap-3">
              {(["md", "sm"] as const).map((size) => (
                <View key={size} className="gap-2">
                  <AppText variant="overline">
                    {variant} · {size}
                  </AppText>
                  <View
                    className={cn(
                      "flex-row items-center gap-4",
                      variant === "overlay" && "rounded-xl bg-primary p-4",
                    )}
                  >
                    {ratingExamples.map((vote) => (
                      <RatingBadge
                        key={vote}
                        vote={vote}
                        variant={variant}
                        size={size}
                      />
                    ))}
                  </View>
                </View>
              ))}
            </View>
          ))}
          <AppText variant="caption">
            Sin votos: no debe aparecer ningún badge.
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Anillos de calificación</AppText>
          <View className="flex-row flex-wrap gap-4">
            {ratingExamples.map((vote) => (
              <View key={vote} className="items-center gap-2">
                <RatingRing vote={vote} />
                <AppText variant="caption">
                  {vote <= 0 ? `Sin votos (${vote})` : `Nota ${vote}`}
                </AppText>
              </View>
            ))}
          </View>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Tarjetas de póster</AppText>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Última tarjeta: {lastPosterTitle ?? "Ninguna"}
          </AppText>
          <AppText variant="overline">md · ancho de 124 px</AppText>
          <View className="-mx-4 gap-3.5">
            <SectionHeader title="Películas de prueba" className="px-6" />
            <HorizontalList
              data={horizontalPosterExamples}
              keyExtractor={(poster, index) => `${poster.title}-${index}`}
              onEndReached={() => setListEndCount((count) => count + 1)}
              renderItem={({ item }) => (
                <PosterCard
                  {...item}
                  onPress={() => setLastPosterTitle(item.title)}
                />
              )}
            />
          </View>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            fin alcanzado ×{listEndCount}
          </AppText>
          <AppText variant="overline">sm · grid de tres columnas</AppText>
          <View className="flex-row gap-3">
            {posterExamples.map((poster) => (
              <PosterCard
                key={poster.title}
                {...poster}
                size="sm"
                className="flex-1"
                onPress={() => setLastPosterTitle(poster.title)}
              />
            ))}
          </View>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Encabezados de sección</AppText>
          <SectionHeader
            title="Populares"
            actionLabel="Ver todo"
            onActionPress={handleSectionAction}
          />
          <SectionHeader
            title="Un título de sección muy largo que debe dejar visible la acción"
            actionLabel="Ver todo"
            onActionPress={handleSectionAction}
          />
          <SectionHeader title="Dónde ver" note="Datos de JustWatch" />
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Acciones pulsadas: {sectionActionCount}
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Fichas de información</AppText>
          <View className="flex-row flex-wrap gap-2.5">
            {infoTileExamples.map((tile) => (
              <InfoTile
                key={tile.label}
                label={tile.label}
                value={tile.value}
                className="grow basis-[40%]"
              />
            ))}
          </View>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Filas de lista</AppText>
          <View className="rounded-[18px] bg-surface border border-border overflow-hidden">
            {listRowExamples.map((row, index) => (
              <ListRow
                key={row.label}
                {...row}
                divider={index < listRowExamples.length - 1}
              />
            ))}
          </View>
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Pulsaciones en Idioma: {languageRowPressCount}
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Estados vacíos</AppText>
          <EmptyState
            icon="film-outline"
            title="Sin resultados"
            description="No encontramos películas que coincidan con tu búsqueda."
            className="rounded-[18px] border border-border bg-surface"
          />
          <EmptyState
            icon="film-outline"
            title="Descubre nuevas películas"
            description="Explora el catálogo para encontrar tu próxima película."
            actionLabel="Explorar"
            onActionPress={handleEmptyAction}
            className="rounded-[18px] border border-border bg-surface"
          />
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Acciones de estados vacíos: {emptyActionCount}
          </AppText>
        </View>
        <View className="mt-6 gap-4">
          <AppText variant="title">Estados de error</AppText>
          <ErrorState
            title="No pudimos cargar las películas"
            description="Comprueba tu conexión e inténtalo de nuevo."
            retryLabel="Reintentar"
            onRetry={() => setRetryCount((count) => count + 1)}
            className="rounded-[18px] border border-border bg-surface"
          />
          <ErrorState
            title="Servicio no disponible"
            retryLabel="Reintentar"
            className="rounded-[18px] border border-border bg-surface"
          />
          <AppText variant="caption" accessibilityLiveRegion="polite">
            Reintentos: {retryCount}
          </AppText>
        </View>
      </ScrollView>
    </Screen>
  );
}
