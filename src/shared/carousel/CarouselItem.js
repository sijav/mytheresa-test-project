import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {MDCRipple} from '@material/ripple';
import {SwiperSlide} from 'swiper/react';
import {Typography} from 'src/shared/typography';

export function CarouselItem({item, index}) {
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    const ripple = new MDCRipple(ref.current);
    return () => {
      ripple.deactivate();
      ripple.destroy();
    };
  }, []);
  const handleClick = () => {
    navigate({pathname: item.pathname});
  };
  return (
    <SwiperSlide virtualIndex={index} key={index}>
      <div ref={ref} onClick={handleClick}>
        <Typography Element="h5" variant="headline5" color="blue-50">
          {item.title}
        </Typography>
        <img src={item.pic} alt={item.title} />
      </div>
    </SwiperSlide>
  );
}

export const carouselPropTypes = PropTypes.exact({
  title: PropTypes.string,
  pic: PropTypes.string,
  pathname: PropTypes.string
});

CarouselItem.propTypes = {
  item: carouselPropTypes,
  index: PropTypes.number
};

CarouselItem.displayName = 'SwiperSlide'; // Very stupid bug with swiper
