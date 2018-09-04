import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Eye } from '@githubprimer/octicons-react';
import Icon from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SpanGithub from '../../styles/GithubComponent';

class Watches extends React.Component {

  constructor(){
    super();
    this.state = {
      watched: false,
      onClickEvent: false,
    };
  }

  componentDidMount () {
    const { repo,
      owner: account,
      token } = this.props;
    fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(message => {
        if (message.status === 200) {
          this.setState({
            watched: true,
            onClickEvent: false,
          });
        }
      })
      .catch(err => {
        if (token) this.props.onErrorWatchEventHandler(`watch ${err.message}`);
      });
  }

  componentDidUpdate (prevProps, prevState) {
    const { onWatchRepoEventHandler, token } = this.props;

    if (token && prevState.watched !== this.state.watched && this.state.onClickEvent) {
      onWatchRepoEventHandler(this.state.watched);
    }
  }

  onClickWatchEvent = ev => {
    ev.preventDefault();
    if (this.props.token) {
      this.setState({
        watched: !this.state.watched,
        onClickEvent: true,
      });
    } else {
      this.props.onWatchRepoEventHandler(true);
    }
  }

  render() {
    const span = (this.state.watched)
      ? (<SpanGithub onClick={this.onClickWatchEvent}>UnWatch {this.props.watches} <VisibilityOffIcon /></SpanGithub>
      )
      : (<SpanGithub onClick={this.onClickWatchEvent}>Watch {this.props.watches} <Octicon icon={Eye} size='medium' verticalAlign='middle' /></SpanGithub>);
    return span;
  }
}

Watches.propTypes = {
  repo: PropTypes.string,
  watches: PropTypes.number,
  owner: PropTypes.string,
  token: PropTypes.string,
  onWatchRepoEventHandler: PropTypes.func,
  onErrorWatchEventHandler: PropTypes.func,
};

export default Watches;
