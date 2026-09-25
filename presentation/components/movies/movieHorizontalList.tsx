import { FlatList, Text, View } from 'react-native';
import { Movie } from '../../../infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
	title?: string;
	movies: Movie[];
	className?: string;
}

const MovieHorizontalList = ({title, movies, className}: Props) => {

	return (
		<View className={`${className}`}>
			{title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

			<FlatList
			className='px-0'
				horizontal
				data={movies}
				keyExtractor={(item) => `${item.id}`}
				showsHorizontalScrollIndicator = {false}
				renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>}
			/>
		</View>
	)
}

export default MovieHorizontalList