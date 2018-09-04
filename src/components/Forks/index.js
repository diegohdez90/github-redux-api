import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { RepoForked } from '@githubprimer/octicons-react';
import SpanGithub from '../../styles/GithubComponent';

const Forks = ({ forks, onForkRepoEventHandler }) => (<SpanGithub onClick={e => {
  e.preventDefault();
  onForkRepoEventHandler();
}}>Fork {forks}<Octicon icon={RepoForked} size='medium' verticalAlign='middle' /></SpanGithub>);

Forks.propTypes = {
  forks: PropTypes.number,
  onForkRepoEventHandler: PropTypes.func,
};

export default Forks;
