import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styles/RepoElement';
import RepoDetails from '../RepoDetails';

const Repo = props => (<RepoElement>
  <h4>{props.name}</h4>
  <p>{props.description}</p>
  <RepoDetails
    {...props}
  />
</RepoElement>);

Repo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  owner: PropTypes.string,
  token: PropTypes.string,
  onOpenRepoDetails: PropTypes.func,
  repoOpen: PropTypes.string,
  issues: PropTypes.array,
  onChangeIssueTab: PropTypes.func,
  pulls: PropTypes.array,
  branches: PropTypes.array,
  commits: PropTypes.array,
  onChangePullTab: PropTypes.func,
  onLoadOpen: PropTypes.func,
  isRepoOpen: PropTypes.bool,
  onStarRepoEventHandler: PropTypes.func,
  onErrorWatchEventHandler: PropTypes.func,
  onErrorStarEventHandler: PropTypes.func,
  onWatchRepoEventHandler: PropTypes.func,
  onForkRepoEventHandler: PropTypes.func,
};

export default Repo;
