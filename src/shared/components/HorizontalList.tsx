import { cn } from "@/shared/utils/cn";
import { FlatList, type ListRenderItem } from "react-native";

type HorizontalListProps<T> = {
  data: readonly T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  onEndReached?: () => void;
  contentContainerClassName?: string;
};

export function HorizontalList<T>({
  data,
  renderItem,
  keyExtractor,
  onEndReached,
  contentContainerClassName,
}: HorizontalListProps<T>) {
  return (
    <FlatList<T>
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerClassName={cn("gap-3 px-6", contentContainerClassName)}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}
