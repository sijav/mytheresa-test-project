import {MIcon} from 'src/shared/m-icon';
import {Typography} from 'src/shared/typography/Typograhy';
import './not-found-page.scss';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <MIcon iconName="priority_high" color="red-500" />
      <Typography>Not found</Typography>
    </div>
  );
}
