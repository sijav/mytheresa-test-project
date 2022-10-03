import {CarouselContainer} from './CarouselContainer';
import {genreQuery} from './genre.query';
import {movieQuery} from './movie.query';
import {tvQuery} from './tv.query';

export default function HomePage() {
  return (
    <>
      <CarouselContainer pathname="movie" query={movieQuery} queryKey="Movies" />
      <CarouselContainer pathname="tv" query={tvQuery} queryKey="TV" />
      <CarouselContainer pathname="genre" query={genreQuery} queryKey="Genre" />
    </>
  );
}
