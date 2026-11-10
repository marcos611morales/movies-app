import MoviePoster from "@/features/movies/components/MoviePoster";
import { Movie } from "@/features/movies/types/movie.interface";
import { AppText } from "@/shared/components/AppText";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log("cargar siguientes películas");
    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${className}`}>
      {title && (
        <AppText variant="title" className="px-4 mb-2">
          {title}
        </AppText>
      )}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-0"
        renderItem={({ item, index }) => (
          <MoviePoster
            id={item.id}
            poster={item.poster}
            smallPoster
            clasName={index === 0 ? "pl-1" : ""}
          />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
