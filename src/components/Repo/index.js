import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styles/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = ({repo,
  onOpenRepoDetails,
}) => (<RepoElement>
  <h4>{repo.name}</h4>
  <RepoDetails
    name={repo.name}
    onOpenRepoDetails={onOpenRepoDetails}
    watches={repo.watchers}
    forks={repo.forks}
    stars={repo.stargazers_count}
    follows={0}
  />
</RepoElement>);

Repo.propTypes = {
  repo: PropTypes.object,
  onOpenRepoDetails: PropTypes.func,
};

export default Repo;
