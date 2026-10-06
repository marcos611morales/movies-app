import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { getMovieByIdAction } from '../../../core/actions/movie/get-movie-by-id.action';

const MovieScreen = () => {

	const {id} = useLocalSearchParams();

	getMovieByIdAction(+id);

	return (
		<View>
		<Text>MovieScreen</Text>
		</View>
	)
}

export default MovieScreen