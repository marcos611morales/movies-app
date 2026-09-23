import { Text, View } from 'react-native';

import { nowPlayingAction } from '../../core/actions/movies/now-playing.actions';
import '../../global.css';

const RootLayout = () => {
	nowPlayingAction();
  return (
	<View>
	  <Text>RootLayout</Text>
	</View>
  )
}

export default RootLayout