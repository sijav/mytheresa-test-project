import PropTypes from 'prop-types';
import './overlay.scss';

export function Overlay({children}) {
  return <div className="overlay">{children}</div>;
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
