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
    }
  };
};

class WatchesComponent extends React.Component {

  constructor(){
    super();
    this.onWatchRepo = this.onWatchRepo.bind(this);
  }

  onWatchRepo(ev) {
    ev.preventDefault();
    console.log('watching' , this.props.repo);
    
    this.props.watchRepo(this.props.repo, this.props.githubAccount, this.props.token)
  }

  render() {
    return (<SpanGithub onClick={this.onWatchRepo}>{this.props.watches}<Octicon icon={Eye} size='medium' verticalAlign='middle' /></SpanGithub>)
  }
}

const Watches = connect(mapStateToProps, mapDispatchToProps, null)(WatchesComponent)

WatchesComponent.propTypes = {
  repo: PropTypes.string,
  watches: PropTypes.number,
  githubAccount: PropTypes.string,
  token: PropTypes.string,
  watchRepo: PropTypes.func,
};

export default Watches;