import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideShow from '../../../presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '../../../presentation/components/movies/movieHorizontalList';
import { useMovies } from '../../../presentation/hooks/useMovies';

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets();
	const {nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery} = useMovies();

	// // TMDB puede repetir películas entre páginas; se eliminan duplicados por id
	// const topRatedMovies = [
	// 	...new Map(
	// 		(topRatedQuery.data?.pages.flat() ?? []).map((movie) => [movie.id, movie])
	// 	).values(),
	// ];

	if(nowPlayingQuery.isLoading) {
		return (
			<View className='justify-center items-center flex-1'>
				<ActivityIndicator color="purple" size={40}/>
			</View>
		);
	}

	return (
		<ScrollView>

			<View className='mt-2 pb-10'  style={{paddingTop: safeArea.top}}>
			<Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

			{/* Carrusel de imágenes */}
			<MainSlideShow movies={ nowPlayingQuery.data ?? []}/>

			{/* Popular */}
			<MovieHorizontalList 
				title='Populares' 
				movies={popularQuery.data ?? []}
				className='mb-5'
			/>

			{/* Top Rater */}
			<MovieHorizontalList 
				title='Mejor calificadas' 
				// movies={topRatedMovies}
				movies={topRatedQuery.data?.pages.flat() ?? []}
				className='mb-5'
				loadNextPage={ topRatedQuery.fetchNextPage}
			/>

			{/* Upcoming */}
			<MovieHorizontalList title='Proximamente' movies={upcomingQuery.data ?? []}/>
		</View>
		</ScrollView>


	)
}

export default HomeScreen