import PropTypes from 'prop-types';
import './Typography.scss';

const typographies = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
];

export function Typography({Element = 'p', variant = 'body1', color, children}) {
  return (
    <Element
      className={`mdc-typography--${variant}`}
      style={color && {color: `var(--mdc-theme-${color})`}}
    >
      {children}
    </Element>
  );
}

Typography.propTypes = {
  Element: PropTypes.elementType,
  variant: PropTypes.oneOf(typographies),
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
