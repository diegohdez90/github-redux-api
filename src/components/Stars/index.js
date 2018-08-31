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
      // PUT /user/starred/:owner/:repo
      fetch(`https://api.github.com/user/starred/${account}/${repo}`, {
        method: 'PUT',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then((message) => dispatch(starRepoSuccess(message)))
      .then(() => {

      })
      .catch(err => dispatch(starRepoFailure(err.message)))
    },
    unStarRepo: (repo, account, token) => {
      fetch(`https://api.github.com/user/starred/${account}/${repo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then(() => dispatch(starRepoSuccess(`UnStart ${repo} successfully`)))
      .catch(err => dispatch(starRepoFailure(err.message)))
    },
    errorStarred: (message) => dispatch(starRepoFailure(message))
  }
}

class StarsComponent extends React.Component { 
  constructor() {
    super()
    this.state = {
      starred: "Star"
    };
    this.onStarRepoEventHandler = this.onStarRepoEventHandler.bind(this);
  }
  
  componentDidMount() {
    const { repo,
      githubAccount,
      token } = this.props;

    fetch(`https://api.github.com/user/starred/${githubAccount}/${repo}`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`
      }
    })
    .then((message) => {
      if (message.status === 204) {
        this.setState({
          starred: "UnStar"
        })
      }
    }).catch((err) => {
      if (token) this.props.errorStarred(err.message);
    });
  }

  onStarRepoEventHandler(e) {
    e.preventDefault();
    if (this.state.starred === "Star") {
      this.props.starRepo(this.props.repo, this.props.githubAccount, this.props.token); 
      if (this.props.token) {
        this.setState({
          starred: 'UnStar'
        });        
      }
    } else {
      this.props.unStarRepo(this.props.repo, this.props.githubAccount, this.props.token);
      if (this.props.token) {
        this.setState({
          starred: 'Star'
        });        
      }
    }
  }

  render() {
    return (<SpanGithub onClick={this.onStarRepoEventHandler}>{this.state.starred} {this.props.stars}<Octicon icon={Star} size='medium' verticalAlign='middle' /></SpanGithub>)
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