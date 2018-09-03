import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';

const Repos = ({repos,
  account,
  onOpenRepoDetails,
  onStarRepoEventHandler,
  repoOpen,
}) => (Array.isArray(repos)) ? (
  <div>
    {(account) ? (<h3 className="repos-found">{account.name} has {account.public_repos} public repositories</h3>) : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>)}
    <ul>
      {
        repos.map(repo => <Repo
          key={repo.id}
          repo={repo}
          onOpenRepoDetails={onOpenRepoDetails}
          isRepoOpen={(repoOpen === repo.name) ? true : false}
          repoOpen={repoOpen}
          onStarRepoEventHandler={onStarRepoEventHandler}
        />)
      }
    </ul>
  </div>) : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>);

Repos.propTypes = {
  account: PropTypes.object,
  repos: PropTypes.array,
  onOpenRepoDetails: PropTypes.func,
  onStarRepoEventHandler: PropTypes.func,
  detailsOpen: PropTypes.bool,
  repoOpen: PropTypes.string,
};

export default Repos;
