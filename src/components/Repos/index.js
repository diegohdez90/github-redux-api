import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Repo from '../Repo';
import RepoList from '../../styles/ListRepo';

const Repos = ({repos,
  pageSize,
  onSetPage,
  account,
  owner,
  token,
  onOpenRepoDetails,
  onStarRepoEventHandler,
  onErrorStarEventHandler,
  onWatchRepoEventHandler,
  onErrorWatchEventHandler,
  onForkRepoEventHandler,
  repoOpen,
  issues,
  onChangeIssueTab,
  pulls,
  branches,
  commits,
  onChangePullTab,
  onLoadOpen,
}) => (Array.isArray(repos)) ? (
  <div className='repos-content'>
    {(account) ? (<h3 className="repos-found">{account.name} has {account.public_repos} public repositories</h3>) : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>)}
    <RepoList>
      {
        repos.map(repo => <Repo
          key={repo.id}
          repo={repo}
          owner={owner}
          token={token}
          onOpenRepoDetails={onOpenRepoDetails}
          isRepoOpen={(repoOpen === repo.name) ? true : false}
          issues={repoOpen === repo.name ? issues : []}
          onChangeIssueTab={onChangeIssueTab}
          pulls={repoOpen === repo.name ? pulls : []}
          onChangePullTab={onChangePullTab}
          branches={branches}
          commits={commits}
          onLoadOpen={onLoadOpen}
          repoOpen={repoOpen}
          onStarRepoEventHandler={onStarRepoEventHandler}
          onErrorStarEventHandler={onErrorStarEventHandler}
          onWatchRepoEventHandler={onWatchRepoEventHandler}
          onErrorWatchEventHandler={onErrorWatchEventHandler}
          onForkRepoEventHandler={onForkRepoEventHandler}
        />)
      }
    </RepoList>
    { account ? <ReactPaginate
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      pageCount={Math.ceil(account.public_repos / pageSize)}
      initialPage={0}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={
        page => {
          page.selected ++;
          onSetPage(page.selected);
        }
      }
    /> : null}
  </div>) : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>);

Repos.defaultProps = {
  issues: [],
  pulls: [],
};

Repos.propTypes = {
  account: PropTypes.object,
  repos: PropTypes.array,
  owner: PropTypes.string,
  token: PropTypes.string,
  onOpenRepoDetails: PropTypes.func,
  onStarRepoEventHandler: PropTypes.func,
  onErrorStarEventHandler: PropTypes.func,
  onWatchRepoEventHandler: PropTypes.func,
  onErrorWatchEventHandler: PropTypes.func,
  onForkRepoEventHandler: PropTypes.func,
  detailsOpen: PropTypes.bool,
  repoOpen: PropTypes.string,
  issues: PropTypes.array,
  onChangeIssueTab: PropTypes.func,
  pulls: PropTypes.array,
  onChangePullTab: PropTypes.func,
  onLoadOpen: PropTypes.func,
  branches: PropTypes.array,
  commits: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  onSetPage: PropTypes.func,
};

export default Repos;
