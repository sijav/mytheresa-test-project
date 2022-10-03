import {useQuery} from '@tanstack/react-query';
import {useNavigate, useParams} from 'react-router-dom';
import {env} from 'src/shared/constants/env';
import {FullScreenLoading} from 'src/shared/loading';
import {Typography} from 'src/shared/typography';
import {movieQuery} from './movie.query';

import './movie-page.scss';

export default function MoviePage() {
  const params = useParams();
  const navigate = useNavigate();
  const {data, isLoading} = useQuery(['movie', params?.id || -1], movieQuery);
  console.log({data, isLoading});
  if (!params?.id) {
    navigate({pathname: '/404'}, {replace: true});
  }
  return isLoading ? (
    <FullScreenLoading />
  ) : (
    <div
      className="movie-page"
      style={{backgroundImage: `url(${env.imageUrl}/original${data.backdrop_path})`}}
    >
      <div className="backdrop" />
      <Typography color="secondary" Element="h3" variant="headline3">
        Movie detail of {data.title}
      </Typography>
      <Typography Element="span">Original Title: </Typography>
      <Typography Element="span" variant="body2">
        {data.original_title}
      </Typography>
      <br />
      <Typography Element="span">Genre: </Typography>
      <Typography Element="span" variant="body2">
        {data.genres.map((genre) => genre.name).join(', ')}
      </Typography>
      <br />
      <Typography Element="span">Overview: </Typography>
      <Typography Element="span" variant="body2">
        {data.overview}
      </Typography>
      <br />
      <Typography Element="span">Status: </Typography>
      <Typography Element="span" variant="body2">
        {data.status}
      </Typography>
      <br />
      <Typography Element="span">Votes: </Typography>
      <Typography Element="span" variant="body2">
        {data.vote_count.toLocaleString()} out of {data.vote_average.toLocaleString()}
      </Typography>
      <br />
      <Typography Element="span">Tagline: </Typography>
      <Typography Element="span" variant="body2">
        {data.tagline}
      </Typography>
      <br />
      <Typography Element="span">Spoken languages: </Typography>
      <Typography Element="span" variant="body2">
        {data.spoken_languages.map((lang) => lang.english_name).join(', ')}
      </Typography>
      <br />
      <Typography Element="span">Runtime: </Typography>
      <Typography Element="span" variant="body2">
        {data.runtime.toLocaleString()}
      </Typography>
      <br />
      <Typography Element="span">Revenue: </Typography>
      <Typography Element="span" variant="body2">
        {data.revenue.toLocaleString()}
      </Typography>
      <br />
      <Typography Element="span">Popularity: </Typography>
      <Typography Element="span" variant="body2">
        {data.popularity.toLocaleString()}
      </Typography>
      <br />
      <Typography Element="span">Release Date: </Typography>
      <Typography Element="span" variant="body2">
        {new Date(data.release_date).toLocaleDateString()}
      </Typography>
      {data.production_countries && (
        <>
          <br />
          <Typography Element="span">Production Countries: </Typography>
          <Typography Element="span" variant="body2">
            {data.production_countries.map((country) => country.name).join(', ')}
          </Typography>
        </>
      )}
      {data.production_companies && (
        <>
          <br />
          <div className="companies">
            <Typography Element="span">Production Companies: </Typography>
            {data.production_companies.map((item, index) =>
              item.logo_path ? (
                <img
                  className="company"
                  key={index}
                  src={`${env.imageUrl}/w500${item.logo_path}`}
                  alt={item.name}
                  title={`${item.name} from ${item.origin_country}`}
                />
              ) : (
                <Typography Element="span" variant="body2">
                  {item.name} from {item.origin_country}
                </Typography>
              )
            )}
          </div>
        </>
      )}
      {data.belongs_to_collection && (
        <>
          <br />
          <Typography Element="span">Collection name: </Typography>
          <Typography Element="span" variant="body2">
            {data.belongs_to_collection.name}
          </Typography>
          <br />
          <img
            src={`${env.imageUrl}/w500${data.belongs_to_collection.poster_path}`}
            alt={data.belongs_to_collection.name}
          />
        </>
      )}
    </div>
  );
}
