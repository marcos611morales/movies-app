import { AppText } from "@/shared/components/AppText";
import { Button } from "@/shared/components/Button";
import { IconButton } from "@/shared/components/IconButton";
import { useT } from "@/shared/i18n/useT";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function LanguageScreen() {
  const router = useRouter();
  const t = useT();

  return (
    <View className="gap-[22px] px-6 pb-10 pt-6">
      <View className="flex-row items-start gap-3">
        <View className="flex-1 gap-1.5">
          <AppText variant="title" accessibilityRole="header">
            {t("language.title")}
          </AppText>
          <AppText variant="caption" className="text-[14px] leading-[21px]">
            {t("language.description")}
          </AppText>
        </View>
        <IconButton
          icon="close"
          variant="surface"
          iconSize={18}
          accessibilityLabel={t("language.close")}
          onPress={router.back}
        />
      </View>

      {/* 7b: aquí van las opciones */}

      <AppText variant="caption" className="text-text-muted leading-5">
        {t("language.note")}
      </AppText>
      <Button label={t("language.done")} onPress={router.back} />
    </View>
  );
}
