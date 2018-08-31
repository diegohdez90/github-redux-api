import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Octicon, { Eye } from '@githubprimer/octicons-react';
import SpanGithub from '../../styles/GithubComponent';
import { watchRepoSuccess, watchRepoFailure } from '../../actions';

const mapStateToProps = (state) => {
  return {
    token: state.reducer.token,
    githubAccount: state.reducer.githubAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    watchRepo: (repo, account, token) => {
      fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
        method: 'PUT',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then((message) => dispatch(watchRepoSuccess(message)))
      .catch(err => dispatch(watchRepoFailure(err.message)))
    },
    unWatchRepo: (repo, account, token) => {
      fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
        method: 'DELETE',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then(() => dispatch(watchRepoSuccess(`UnWatch ${repo} successfully`)))
      .catch(err => dispatch(watchRepoFailure(err.message)))
    },
    errorWatched: message => dispatch(watchRepoFailure(message))
  };
};

class WatchesComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      watched: "Watch"
    };
    this.onWatchRepoEventHandler = this.onWatchRepoEventHandler.bind(this);
  }

  componentDidMount () {
    const { repo,
      githubAccount: account,
      token } = this.props;
    fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`
      }
    })
    .then(message => {
      if (message.status === 200) {
        this.setState({
          watched: "unWatch"
        });
      }
    })
    .catch(err => {
      if(token) this.props.errorWatched(err.message);
    });
  }

  onWatchRepoEventHandler(ev) {
    ev.preventDefault();
    if (this.state.watched === "Watch") {
      this.props.watchRepo(this.props.repo, this.props.githubAccount, this.props.token);
      if (this.props.token) this.setState({ watched: 'UnWatch' });
    } else {
      this.props.unWatchRepo(this.props.repo, this.props.githubAccount, this.props.token);
      if (this.props.token) this.setState({ watched: 'Watch'})
    }
  }

  render() {
    return (<SpanGithub onClick={this.onWatchRepoEventHandler}>{this.state.watched} {this.props.watches}<Octicon icon={Eye} size='medium' verticalAlign='middle' /></SpanGithub>)
  }
}

const Watches = connect(mapStateToProps, mapDispatchToProps, null)(WatchesComponent)

WatchesComponent.propTypes = {
  repo: PropTypes.string,
  watches: PropTypes.number,
  githubAccount: PropTypes.string,
  token: PropTypes.string,
};

export default Watches;