import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { RepoForked } from '@githubprimer/octicons-react';

const Forks = ({ forks }) => (<div>{forks}<Octicon icon={RepoForked} size='medium' verticalAlign='middle'  /></div>);

Forks.propTypes = {
  forks: PropTypes.number
}

export default Forks;