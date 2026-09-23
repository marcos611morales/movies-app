
import axios from 'axios'


export const movieApi = axios.create({
	baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
	params: {
		languaje: 'es-MX',
		api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
	}
})