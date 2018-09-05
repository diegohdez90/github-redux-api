import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styles/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = ({repo,
  owner,
  token,
  onOpenRepoDetails,
  isRepoOpen,
  repoOpen,
  onStarRepoEventHandler,
  onErrorWatchEventHandler,
  onErrorStarEventHandler,
  onWatchRepoEventHandler,
  onForkRepoEventHandler,
  issues,
  onChangeIssueTab,
  pulls,
}) => (<RepoElement>
  <h4>{repo.name}</h4>
  <p>{repo.description}</p>
  <RepoDetails
    name={repo.name}
    owner={owner}
    token={token}
    onOpenRepoDetails={onOpenRepoDetails}
    repoOpen={repoOpen}
    isRepoOpen={isRepoOpen}
    issues={issues}
    onChangeIssueTab={onChangeIssueTab}
    pulls={pulls}
    watches={repo.watchers}
    onWatchRepoEventHandler={onWatchRepoEventHandler}
    onErrorWatchEventHandler={onErrorWatchEventHandler}
    forks={repo.forks}
    stars={repo.stargazers_count}
    onStarRepoEventHandler={onStarRepoEventHandler}
    onErrorStarEventHandler={onErrorStarEventHandler}
    onForkRepoEventHandler={onForkRepoEventHandler}
    follows={0}
  />
</RepoElement>);

Repo.propTypes = {
  repo: PropTypes.object,
  owner: PropTypes.string,
  token: PropTypes.string,
  onOpenRepoDetails: PropTypes.func,
  repoOpen: PropTypes.string,
  issues: PropTypes.array,
  onChangeIssueTab: PropTypes.func,
  pulls: PropTypes.array,
  isRepoOpen: PropTypes.bool,
  onStarRepoEventHandler: PropTypes.func,
  onErrorWatchEventHandler: PropTypes.func,
  onErrorStarEventHandler: PropTypes.func,
  onWatchRepoEventHandler: PropTypes.func,
  onForkRepoEventHandler: PropTypes.func,
};

export default Repo;
