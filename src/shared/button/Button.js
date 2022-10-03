import {useEffect, useRef} from 'react';
import {MDCRipple} from '@material/ripple';
import PropTypes from 'prop-types';
import './button.scss';

export function Button({unbound = false, children, onClick, variant, icon, trailingIcon = false}) {
  const ref = useRef();
  useEffect(() => {
    if (ref) {
      const ripple = new MDCRipple(ref.current);
      if (unbound) {
        ripple.unbounded = unbound;
      }
      return () => {
        ripple.deactivate();
        ripple.destroy();
      };
    }
  }, []);
  return (
    <div className="mdc-touch-target-wrapper">
      <button
        className={`mdc-button mdc-button--touch ${
          variant === 'outlined'
            ? 'mdc-button--outlined'
            : variant === 'contained'
            ? 'mdc-button--raised'
            : ''
        } ${icon && trailingIcon ? 'mdc-button--icon-trailing' : 'mdc-button--icon-leading'}`}
        ref={ref}
        onClick={onClick}
      >
        <span className="mdc-button__ripple"></span>
        <span className="mdc-button__touch"></span>
        {icon && (
          <i className="material-icons mdc-button__icon" aria-hidden="true">
            {icon}
          </i>
        )}
        <span className="mdc-button__label">{children}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  unbound: PropTypes.bool,
  variant: PropTypes.oneOf(['outlined', 'contained']),
  icon: PropTypes.string,
  trailingIcon: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
