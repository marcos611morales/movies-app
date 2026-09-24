
import { nowPlayingAction } from '../../core/actions/movies/now-playing.actions';
import '../../global.css';

import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query';
import { Stack } from 'expo-router';

const RootLayout = () => {

	nowPlayingAction();
	// Create a client
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</QueryClientProvider>
	)
}

export default RootLayout