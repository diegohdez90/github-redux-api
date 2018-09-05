import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../styles/Container';
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
import Repos from '../../components/Repos';
import { clearMessage,
  updateUsernameToken,
  updatePasswordToken,
  fetchGetToken,
  updateGithubAccount,
  fetchAccount,
  fetchUserRepos,
  starRepoSuccess,
  starRepoFailure,
  openRepoDetails,
  fetchUpdateRepo,
  watchRepoSuccess,
  watchRepoFailure,
  forkRepoSuccess,
  forkRepoFailure,
  setPage,
  fetchRepoIssuesSuccess,
  fetchRepoIssuesFailure,
  fetchRepoPullSuccess,
  fetchRepoPullFailure,
} from '../../actions';

const mapStateToProps = state => ({
  message: state.reducer.message,
  owner: state.reducer.githubAccount,
  token: state.reducer.token,
  repos: state.reducer.repos,
  account: state.reducer.account,
  detailsOpen: state.reducer.detailsOpen,
  repoOpen: state.reducer.repoOpen,
  issues: state.reducer.issues,
  pulls: state.reducer.pulls,
  pageSize: state.reducer.pageSize,
  page: state.reducer.page,
});

const mapDispatchToProps = dispatch => ({
  clearMessage: () => {
    dispatch(clearMessage());
  },
  updateUsername: username => {
    dispatch(updateUsernameToken(username));
  },
  updatePassword: password => {
    dispatch(updatePasswordToken(password));
  },
  fetchUserToken: (username, password) => {
    dispatch(fetchGetToken(username, password));
  },
  updateGithubAccount: githubAccount => {
    dispatch(updateGithubAccount(githubAccount));
  },
  fetchUser: (githubAccount, token) => {
    dispatch(fetchAccount(githubAccount, token));
  },
  fetchUserRepos: (githubAccount, token, page) => {
    dispatch(fetchUserRepos(githubAccount, token, page));
  },
  setPage: number => dispatch(setPage(number)),
  openDetails: (repo, toggle) => {
    dispatch(openRepoDetails(repo, toggle));
  },
  // user/starred/:owner/:repo
  starRepo: (repo, account, token) => {
    // PUT /user/starred/:owner/:repo
    fetch(`https://api.github.com/user/starred/${account}/${repo}`, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(message => dispatch(starRepoSuccess(message)))
      .then(() => dispatch(fetchUpdateRepo(repo,account,token)))
      .catch(err => dispatch(starRepoFailure(err.message)));
  },
  unStarRepo: (repo, account, token) => {
    fetch(`https://api.github.com/user/starred/${account}/${repo}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(() => dispatch(starRepoSuccess(`UnStart ${repo} successfully`)))
      .then(() => dispatch(fetchUpdateRepo(repo, account, token)))
      .catch(err => dispatch(starRepoFailure(err.message)));
  },
  errorStarred: message => dispatch(starRepoFailure(message)),
  watchRepo: (repo, account, token) => {
    fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(message => dispatch(watchRepoSuccess(message)))
      .then(() => dispatch(fetchUpdateRepo(repo, account, token)))
      .catch(err => dispatch(watchRepoFailure(err.message)));
  },
  unWatchRepo: (repo, account, token) => {
    fetch(`https://api.github.com/repos/${account}/${repo}/subscription`, {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(() => dispatch(watchRepoSuccess(`UnWatch ${repo} successfully`)))
      .then(() => dispatch(fetchUpdateRepo(repo, account, token)))
      .catch(err => dispatch(watchRepoFailure(err.message)));
  },
  errorWatched: message => dispatch(watchRepoFailure(message)),
  // /repos/:owner/:repo/forks
  postFork: (repo, account, token) => {
    fetch(`https://api.github.com/repos/${account}/${repo}/forks`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(message => {
        if (message.status === 202) {
          dispatch(forkRepoSuccess(message));
        }
      })
      .then(() => dispatch(fetchUpdateRepo(repo, account, token)))
      .catch(err => {
        dispatch(forkRepoFailure(err.message));
      });
  },
  getIssues: (repo, githubAccount, token) => {
    fetch(`https://api.github.com/repos/${githubAccount}/${repo}/issues`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.symmetra-preview+json',
      },
    })
      .then(async response => {
        if (response.status === 200) {
          const issues = await Promise.resolve(response.json());
          dispatch(fetchRepoIssuesSuccess(issues));
        }
      })
      .catch(err => dispatch(fetchRepoIssuesFailure(err.message)));
  },
  getPulls: (repo, githubAccount, token) => {
    const headers = (token) ? { Authorization : `Basic ${token}` } : {};
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/vnd.github.symmetra-preview+json';
    fetch(`https://api.github.com/repos/${githubAccount}/${repo}/pulls`, {
      method: 'GET',
      headers,
    })
      .then(async response => {
        if (response.status === 200) {
          const pulls = await Promise.resolve(response.json());
          dispatch(fetchRepoPullSuccess(pulls));
        }
      })
      .catch(err => dispatch(fetchRepoPullFailure(err.message)));
  },
});

const styleComponent = {
  modal: {
    top: 50,
    left: 50,
  },
};

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class MainComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: '',
      owner: '',
    };
  }

  componentDidUpdate (prevProps) {
    if (prevProps.page !== this.props.page) {
      this.props.fetchUserRepos(this.props.owner, this.props.token, this.props.page);
    }

    if (this.props.openDetails && this.props.repoOpen !== '' && this.props.repoOpen !== prevProps.repoOpen && this.props.account) {
      this.props.getIssues(this.props.repoOpen, this.props.owner, this.props.token);
      this.props.getPulls(this.props.repoOpen, this.props.owner, this.props.token);
    }
  }

  onHandlerModalClose = () => {
    this.props.clearMessage();
    this.setState({
      open: false,
    });
  }

  onChangeUsername = ev => {
    this.setState({
      username: ev.target.value,
    });
    this.props.updateUsername(ev.target.value);
  }

  onChangePassword = ev => {
    this.setState({
      password: ev.target.value,
    });
    this.props.updatePassword(ev.target.value);
  }

  onHandlerGetToken = ev => {
    ev.preventDefault();
    this.props.fetchUserToken(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    });
  }

  onChangeGithubAccount = ev => {
    this.setState({ owner: ev.target.value });
  }

  onHandleSubmitGithubAccount = ev => {
    ev.preventDefault();

    this.props.updateGithubAccount(this.state.owner);
    this.props.fetchUser(this.state.owner, this.props.token);
    this.props.fetchUserRepos(this.state.owner, this.props.token, 1);
    this.setState({
      owner: '',
    });
  }

  onSetPage = number => {
    this.props.setPage(number);
  }

  onOpenRepoDetails = (repo, toggleOpen) => {
    this.props.openDetails(repo, toggleOpen);
  }

  onStarRepoEventHandler = starred => {
    const { repoOpen: repo, owner, token } = this.props;
    if (starred) this.props.starRepo(repo, owner, token);
    else this.props.unStarRepo(repo, owner, token);
  }

  onErrorStarEventHandler = message => {
    this.props.errorStarred(message);
  }

  onWatchRepoEventHandler = watched => {
    const {repoOpen: repo, owner, token } = this.props;
    if (watched) this.props.watchRepo(repo, owner, token);
    else this.props.unWatchRepo(repo, owner, token);
  }

  onErrorWatchEventHandler = message => {
    this.props.errorWatched(message);
  }

  onForkRepoEventHandler = () => {
    const {repoOpen: repo, owner, token} = this.props;
    this.props.postFork(repo, owner, token);
  }

  render() {
    const {classes} = this.props;
    const {modal : modalStyle} = styleComponent;
    return (<Container>
      <GetToken
        username={this.state.username}
        password={this.state.password}
        onChangeUsername={this.onChangeUsername}
        onChangePassword={this.onChangePassword}
        onHandlerGetToken={this.onHandlerGetToken}
      />
      <Form
        githubOwner={this.state.owner}
        onChangeGithubAccount={this.onChangeGithubAccount}
        onHandleSubmitGithubAccount={this.onHandleSubmitGithubAccount}
      />
      <Repos
        repos={this.props.repos}
        account={this.props.account}
        token={this.props.token}
        owner={this.props.owner}
        pageSize={this.props.pageSize}
        page={this.props.page}
        onSetPage={this.onSetPage}
        onOpenRepoDetails={this.onOpenRepoDetails}
        detailsOpen={this.props.detailsOpen}
        repoOpen={this.props.repoOpen}
        issues={this.props.issues}
        pulls={this.props.pulls}
        onStarRepoEventHandler={this.onStarRepoEventHandler}
        onErrorStarEventHandler={this.onErrorStarEventHandler}
        onWatchRepoEventHandler={this.onWatchRepoEventHandler}
        onErrorWatchEventHandler={this.onErrorWatchEventHandler}
        onForkRepoEventHandler={this.onForkRepoEventHandler}
      />
      <Modal
        aria-labelledby="modal-message"
        aria-describedby="display-messages-from-server"
        open={(this.props.message) ? true : false}
        onClose={this.onHandlerModalClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <div>
            {(this.props.message) ? ((this.props.message.statusText) ? this.props.message.statusText : (this.props.message.message) ? this.props.message.message : ((typeof this.props.message === 'string') ? this.props.message :'Something went wrong')) : ''}
          </div>
          <Button onClick={this.onHandlerModalClose}>Close</Button>
        </div>
      </Modal>
    </Container>);
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps, null)(MainComponent);

const MainPage = withStyles(styles)(Main);

MainComponent.propTypes = {
  message: PropTypes.any,
  classes: PropTypes.object,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  fetchUserToken: PropTypes.func,
  updateGithubAccount: PropTypes.func,
  fetchUser: PropTypes.func,
  fetchUserRepos: PropTypes.func,
  repos: PropTypes.array,
  account: PropTypes.object,
  detailsOpen: PropTypes.bool,
  repoOpen: PropTypes.string,
};

export default MainPage;
