import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';
import Issues from '../Issues';

class RepoDetails extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      toggleIssues: false,
      /**
       * 0: Issues
       * 1: Pull Request
       * 2: Branches
       * 3: Commits
       */
      view: 0,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.repoOpen !== nextProps.name) {
      this.setState({
        toggleIssues: false,
      });
    } else {
      this.setState({
        toggleIssues: true,
      });
    }
  }

  toggleDetails = () => {
    this.setState({
      toggleIssues: !this.state.toggleIssues,
    });
  }

  changeTab = (e, value) => {
    this.setState({
      view: value,
    });
  }

  render () {
    const { view } = this.state;
    const { watches,
      stars,
      forks,
      name,
      owner,
      token,
      onStarRepoEventHandler,
      onErrorStarEventHandler,
      onWatchRepoEventHandler,
      onErrorWatchEventHandler,
      onForkRepoEventHandler,
      onOpenRepoDetails,
      repoOpen,
      isRepoOpen,
      issues } = this.props;
    const details = (isRepoOpen) ? (<div>
      <Watches
        watches={watches}
        repo={name}
        owner={owner}
        token={token}
        onWatchRepoEventHandler={onWatchRepoEventHandler}
        onErrorWatchEventHandler={onErrorWatchEventHandler}
      />
      <Stars
        stars={stars}
        repo={name}
        owner={owner}
        token={token}
        onStarRepoEventHandler={onStarRepoEventHandler}
        onErrorStarEventHandler={onErrorStarEventHandler}
      />
      <Forks
        forks={forks}
        repo={name}
        onForkRepoEventHandler={onForkRepoEventHandler}
      />
      <div>
        <Tabs value={view} onChange={this.changeTab}>
          <Tab label='Issues'></Tab>
          <Tab label='Branches'></Tab>
          <Tab label='Commits'></Tab>
        </Tabs>
      </div>
      { view === 1 && <Issues
        repo={name}
        issues={issues}
      /> }
      { view === 2 && <div>PullRequest</div>}
      { view === 3 && <div>Branches</div>}
      { view === 4 && <div>Commits</div>}
    </div>) : null;

    return (
      <div>
        <div onClick={() => {
          this.toggleDetails();
          onOpenRepoDetails(name, !isRepoOpen);
        }}>
          <h6 className="show-repo-details">{(this.state.toggleIssues && repoOpen) ? 'Hide repository details' : 'See repository details'}</h6>
        </div>
        {details}
      </div>);
  }
}

RepoDetails.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  token: PropTypes.string,
  watches: PropTypes.number,
  stars: PropTypes.number,
  forks: PropTypes.number,
  onOpenRepoDetails: PropTypes.func,
  onStarRepoEventHandler: PropTypes.func,
  onErrorStarEventHandler: PropTypes.func,
  onWatchRepoEventHandler: PropTypes.func,
  onErrorWatchEventHandler: PropTypes.func,
  onForkRepoEventHandler: PropTypes.func,
  repoOpen: PropTypes.string,
  isRepoOpen: PropTypes.bool,
  issues: PropTypes.array,
};

export default RepoDetails;
