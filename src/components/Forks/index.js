import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { RepoForked } from '@githubprimer/octicons-react';
import SpanGithub from '../../styledComponents/GithubComponent';

const Forks = ({ forks }) => (<SpanGithub>{forks}<Octicon icon={RepoForked} size='medium' verticalAlign='middle'  /></SpanGithub>);

Forks.propTypes = {
  forks: PropTypes.number
}

export default Forks;