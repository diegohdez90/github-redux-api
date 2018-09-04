import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Star } from '@githubprimer/octicons-react';
import SpanGithub from '../../styles/GithubComponent';

class StarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      starred: false,
      onClickEvent: false,
    };
  }

  componentDidMount() {
    const { repo,
      owner,
      token } = this.props;
    const headers = (token) ? {
      Authorization: `Basic ${token}`,
    } : {};
    fetch(`https://api.github.com/user/starred/${owner}/${repo}`, {
      method: 'GET',
      headers: { ...headers, Accept: 'application / vnd.github.v3.star + json'},
    })
      .then(message => {
        if (message.status === 204) {
          this.setState({
            starred: true,
            onClickEvent: false,
          });
        }
      }).catch(err => {
        if (token) this.props.onErrorStarEventHandler(`star ${err.message}`);
      });
  }

  componentDidUpdate (prevProps, prevState) {
    const { onStarRepoEventHandler, token } = this.props;
    if(token && prevState.starred !== this.state.starred && this.state.onClickEvent) onStarRepoEventHandler(this.state.starred);
  }

  onClickStarEvent = e => {
    e.preventDefault();
    if(this.props.token) {
      this.setState({
        starred: !this.state.starred,
        onClickEvent: true,
      });
    }
    else this.props.onStarRepoEventHandler(true);
  }

  render() {
    const { stars } = this.props;
    return (<SpanGithub onClick={this.onClickStarEvent}>{(this.state.starred) ? 'UnStar' : 'Star'} {stars}<Octicon icon={Star} size='medium' verticalAlign='middle' /></SpanGithub>);
  }
}

StarComponent.propTypes = {
  stars: PropTypes.number,
  repo: PropTypes.string,
  onwer: PropTypes.string,
  token: PropTypes.string,
  onStarRepoEventHandler: PropTypes.func,
  onErrorStarEventHandler: PropTypes.func,
};

export default StarComponent;
