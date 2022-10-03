import PropTypes from 'prop-types';
import {groupChildrenByType} from 'src/shared/utils/groupChildrenByType';

import './main-layout.scss';

// typescript only allows string when it defined at `JSX.IntrinsicElements`
export const ContentRegion = 'ContentRegion';
export const FooterRegion = 'FooterRegion';

const regions = [ContentRegion, FooterRegion];

export function MainLayout({children}) {
  const map = groupChildrenByType(children, regions);
  const contentChild = map.get(ContentRegion);
  const footerChild = map.get(FooterRegion);

  return (
    <div className="main-layout">
      <main>{contentChild}</main>
      <footer className="mdc-elevation--z3">{footerChild}</footer>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
