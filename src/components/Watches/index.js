import react from 'react';
import PropTypes from 'prop-types';
import Octicon, { Eye } from '@githubprimer/octicons-react';

const Watches = ({ watches }) => (<div>{watches}<Octicon icon={Eye} size='medium' verticalAlign='middle' /></div>)

Watches.propTypes = {
  watches: PropTypes.number
};

export default Watches;