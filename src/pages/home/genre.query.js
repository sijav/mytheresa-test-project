import axios from 'axios';
import {endPoints} from 'src/shared/constants/endPoints';
import {env} from 'src/shared/constants/env';
import {movieQuery} from './movie.query';

export const genreQuery = ({signal}) => {
  return axios
    .get(`${env.apiUrl}${endPoints.api.genreList}?api_key=${env.apiKey}&language=en-US`, {signal})
    .then((res) =>
      Promise.all(
        res.data.genres.map(({id, name}) =>
          movieQuery({signal}, id)
            .then((movies) => movies[0])
            .then((movie) => ({
              poster_path: movie.poster_path,
              id: id,
              title: name
            }))
        )
      )
    );
};
