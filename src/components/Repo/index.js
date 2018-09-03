import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styles/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = ({repo,
  onOpenRepoDetails,
  isRepoOpen,
  repoOpen,
}) => (<RepoElement>
  <h4>{repo.name}</h4>
  <RepoDetails
    name={repo.name}
    onOpenRepoDetails={onOpenRepoDetails}
    repoOpen={repoOpen}
    isRepoOpen={isRepoOpen}
    watches={repo.watchers}
    forks={repo.forks}
    stars={repo.stargazers_count}
    follows={0}
  />
</RepoElement>);

Repo.propTypes = {
  repo: PropTypes.object,
  onOpenRepoDetails: PropTypes.func,
  repoOpen: PropTypes.string,
  isRepoOpen: PropTypes.bool,
};

export default Repo;
