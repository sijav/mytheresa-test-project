import {Overlay} from 'src/shared/overlay';
import PropTypes from 'prop-types';
import {MIcon} from 'src/shared/m-icon';
import {Typography} from 'src/shared/typography/Typograhy';
import {Button} from 'src/shared/button';

export function OverlayError({buttonText, errorText, retry}) {
  return (
    <Overlay>
      <MIcon iconName="warning" color="amber-500" />
      <Typography Element="h6" variant="headline6">
        Something went wrong
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          maxWidth: 240,
          my: 2
        }}
      >
        {errorText}
      </Typography>
      {!!retry && (
        <Button onClick={retry} variant="outlined">
          {buttonText || 'Retry'}
        </Button>
      )}
    </Overlay>
  );
}

OverlayError.propTypes = {
  buttonText: PropTypes.string,
  errorText: PropTypes.string,
  retry: PropTypes.func
};
