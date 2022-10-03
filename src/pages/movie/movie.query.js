import axios from 'axios';
import {endPoints} from 'src/shared/constants/endPoints';
import {env} from 'src/shared/constants/env';

// eslint-disable-next-line no-unused-vars
export const movieQuery = ({signal, queryKey: [_, id]}) => {
  if (id < 0) {
    return [];
  }
  return axios
    .get(`${env.apiUrl}${endPoints.api.movie}${id}?api_key=${env.apiKey}&language=en-US`, {signal})
    .then((res) => res.data);
};
