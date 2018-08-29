import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styledComponents/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = ({repo}) => (<RepoElement>
    {repo.name}
    <RepoDetails 
      watches={repo.watchers}
      forks={repo.forks}
      stars={repo.stargazers_count}
      follows={0}
    />
  </RepoElement>)

Repo.propTypes = {
  repo: PropTypes.object,
};

export default Repo;