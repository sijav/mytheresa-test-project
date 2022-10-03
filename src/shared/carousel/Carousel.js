import PropTypes from 'prop-types';
import {Swiper} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {CarouselItem, carouselPropTypes} from './CarouselItem';

import './carousel.scss';

export function Carousel({items}) {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      navigation={{enabled: true}}
      modules={[Pagination, Navigation]}
      className="carousel"
    >
      {items.map((item, key) => (
        <CarouselItem key={key} item={item} />
      ))}
    </Swiper>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(carouselPropTypes)
};
