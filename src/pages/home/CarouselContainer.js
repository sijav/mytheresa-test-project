import PropTypes from 'prop-types';
import {useQuery} from '@tanstack/react-query';
import {Carousel} from 'src/shared/carousel/Carousel';
import {env} from 'src/shared/constants/env';
import {FullScreenLoading} from 'src/shared/loading';

import './carousel-container.scss';
import {Typography} from 'src/shared/typography';

export function CarouselContainer({query, queryKey, pathname}) {
  const {data, isLoading} = useQuery([queryKey], query);
  return (
    <div className="carousel-container mdc-card">
      <Typography variant="headline2" Element="h2" color="primary">
        {queryKey}
      </Typography>
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <Carousel
          items={data.map((item) => ({
            title: item.title,
            pic: `${env.imageUrl}/w500${item.poster_path}`,
            pathname: `${pathname}/${item.id}`
          }))}
        />
      )}
    </div>
  );
}

CarouselContainer.propTypes = {
  query: PropTypes.func.isRequired,
  queryKey: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};
