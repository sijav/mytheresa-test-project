import {Typography} from 'src/shared/typography';
import './loading.scss';

export function FullScreenLoading() {
  return (
    <div className="pre-container">
      <div className="dot-pulse"></div>
      <Typography>Loading…</Typography>
    </div>
  );
}
