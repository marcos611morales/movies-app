import { useWindowDimensions, View } from 'react-native';
import { Movie } from '../../../infrastructure/interfaces/movie.interface';

import { useRef } from 'react';
import { Carousel, type CarouselRef } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';


interface Props {
	movies: Movie[];
}

const MainSlideShow = ({movies} : Props) => {

	const ref = useRef<CarouselRef>(null);
	const width = useWindowDimensions().width;

	return (
		<View className='h-[250px] w-full'>
			<Carousel
				ref={ref}
				data={movies}
				renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster}/>}
				itemSize={200}
				style={{
					width: width,
					height: 250,
				}}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center'
				}}
				layout={{
					type: "parallax",
					offset: 50,
					scale: 0.9
					
				}}
				defaultIndex={1}
			/>
		</View>
  )
}

export default MainSlideShow