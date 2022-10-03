import axios from 'axios';
import {endPoints} from 'src/shared/constants/endPoints';
import {env} from 'src/shared/constants/env';

// eslint-disable-next-line no-unused-vars
export const tvQuery = ({signal}) => {
  return axios
    .get(
      `${env.apiUrl}${endPoints.api.tvList}?api_key=${env.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
      {signal}
    )
    .then((res) =>
      res.data.results.map((tv) => ({
        poster_path: tv.poster_path,
        id: tv.id,
        title: tv.name
      }))
    );
};
