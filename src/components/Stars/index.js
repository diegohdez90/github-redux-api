import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Octicon, { Star } from "@githubprimer/octicons-react";
import SpanGithub from '../../styles/GithubComponent';
import { starRepoSuccess, starRepoFailure } from '../../actions';
 '../../actions';

// user/starred/:owner/:repo

const mapStateToProps = (state) => {
  return {
    token: state.reducer.token,
    githubAccount: state.reducer.githubAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    starRepo: (repo, account, token) => {
      fetch(`https://api.github.com/user/starred/${account}/${repo}`, {
        method: 'PUT',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
        .then((message) => dispatch(starRepoSuccess(message)))
        .catch(err => dispatch(starRepoFailure(err.message)))
    }
  }
}

class StarsComponent extends React.Component { 
  constructor() {
    super()
    this.onStarRepo = this.onStarRepo.bind(this);
  }

  onStarRepo(e) {
    e.preventDefault();
    console.log('star to', this.props.repo);
    this.props.starRepo(this.props.repo, this.props.githubAccount,
    this.props.token );
  }

  render() {
    return (<SpanGithub onClick={this.onStarRepo}>{this.props.stars}<Octicon icon={Star} size='medium' verticalAlign='middle' /></SpanGithub>)
  }
}

const Stars = connect(mapStateToProps, mapDispatchToProps, null)(StarsComponent)

StarsComponent.propTypes = {
  stars: PropTypes.number,
  repo: PropTypes.string,
  githubAccount: PropTypes.string,
  token: PropTypes.string
};

export default Stars;