import axios from 'axios';
import {endPoints} from 'src/shared/constants/endPoints';
import {env} from 'src/shared/constants/env';

// eslint-disable-next-line no-unused-vars
export const movieQuery = ({signal}, genre) => {
  return axios
    .get(
      `${env.apiUrl}${endPoints.api.movieList}?api_key=${
        env.apiKey
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate${
        genre ? `&with_genres=${genre}` : ''
      }`,
      {signal}
    )
    .then((res) =>
      res.data.results.map((movie) => ({
        poster_path: movie.poster_path,
        id: movie.id,
        title: movie.title
      }))
    );
};
