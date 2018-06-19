import { compose } from 'react-apollo';
import withData from './withData';
import withEmotion from './withEmotion';

export default compose(
  withData,
  withEmotion
);
