import PropTypes from 'prop-types';

export function MIcon({iconName, color, fontSize}) {
  return (
    <span
      className="material-symbols-outlined"
      style={{color: `var(--mdc-theme-${color})`, fontSize}}
    >
      {iconName}
    </span>
  );
}

MIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number
};
