import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Octicon, { RepoForked } from '@githubprimer/octicons-react';
import SpanGithub from '../../styles/GithubComponent';
import { forkRepoSuccess, forkRepoFailure } from '../../actions';

// /repos/:owner/:repo/forks

const mapStateToProps = (state) => {
  return {
    token: state.reducer.token,
    githubAccount: state.reducer.githubAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postFork: (repo, account, token) => {
      fetch(`https://api.github.com/repos/${account}/${repo}/forks`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then((message) => {
        if (message.status === 202) {
          dispatch(forkRepoSuccess(message))          
        }
      }).catch((err) => {
        dispatch(forkRepoFailure(err.message))
      });
    }
  };
};

const Forks = ({ forks, repo, token, githubAccount, postFork }) => {
  return (<SpanGithub onClick={(e) => {
    e.preventDefault();
    postFork(repo, githubAccount, token)}
  } >Fork {forks}<Octicon icon={RepoForked} size='medium' verticalAlign='middle'  /></SpanGithub>);

}

Forks.propTypes = {
  forks: PropTypes.number,
  repo: PropTypes.string,
  token: PropTypes.string,
  githubAccount: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Forks)