import react from 'react';
import PropTypes from 'prop-types';
import Octicon, { Eye } from '@githubprimer/octicons-react';
import SpanGithub from '../../styledComponents/GithubComponent';

const Watches = ({ watches }) => (<SpanGithub>{watches}<Octicon icon={Eye} size='medium' verticalAlign='middle' /></SpanGithub>)

Watches.propTypes = {
  watches: PropTypes.number
};

export default Watches;