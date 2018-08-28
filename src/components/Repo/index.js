import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styledComponents/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = ({repo}) => (<RepoElement>
    {repo.name}
    <RepoDetails 
      watches={0}
      forks={repo.forks}
      follows={0}
    />
  </RepoElement>)

Repo.propTypes = {
  repo: PropTypes.object,
};

export default Repo;