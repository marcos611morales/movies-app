
import { nowPlayingAction } from '../../core/actions/movies/now-playing.actions';
import '../../global.css';

import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {

	nowPlayingAction();
	// Create a client
	const queryClient = new QueryClient()
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<QueryClientProvider client={queryClient}>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				/>
			</QueryClientProvider>
		</GestureHandlerRootView>
	)
}

export default RootLayout