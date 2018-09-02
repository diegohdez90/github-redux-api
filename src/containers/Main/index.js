import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../styles/Container'
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
import Repos from '../../components/Repos';
import { clearMessage, 
  updateUsernameToken, 
  updatePasswordToken, 
  fetchGetToken, 
  updateGithubAccount, 
  fetchAccount, 
  fetchUserRepos} from '../../actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    message: state.reducer.message,
    owner: state.reducer.githubAccount,
    token: state.reducer.token,
    repos: state.reducer.repos,
    account: state.reducer.account 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessage: () => {
      dispatch(clearMessage())
    },
    updateUsername: (username) => {
      dispatch(updateUsernameToken(username))
    },
    updatePassword: (password) => {
      dispatch(updatePasswordToken(password))
    },
    fetchUserToken: (username, password) => {
      dispatch(fetchGetToken(username, password))
    },
    updateGithubAccount: githubAccount => {
      dispatch(updateGithubAccount(githubAccount))
    },
    fetchUser: (githubAccount, token) => {
      dispatch(fetchAccount(githubAccount, token))
    },
    fetchUserRepos: (githubAccount, token) => {
      dispatch(fetchUserRepos(githubAccount, token))
    }
  }
}

const styles = {
  modal: {
    top: 50,
    left: 50,
  }
}

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
      owner: ''
    };
  }

  onHandlerModalClose = () => {
    this.props.clearMessage();
    this.setState({
      open: false,
    });
  }

  onChangeUsername = (ev) => {
    this.setState({
      username: ev.target.value
    });
    this.props.updateUsername(ev.target.value);
  }

  onChangePassword = (ev) => {
    this.setState({
      password: ev.target.value
    });
    this.props.updatePassword(ev.target.value);
  }

  onHandlerGetToken = (ev) => {
    ev.preventDefault();
    this.props.fetchUserToken(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    });
  }

  onChangeGithubAccount = (ev) => {
    this.setState({ owner: ev.target.value })
  }

  onHandleSubmitGithubAccount = (ev) => {
    ev.preventDefault();

    this.props.updateGithubAccount(this.state.owner);
    this.props.fetchUser(this.state.owner, this.props.token);
    this.props.fetchUserRepos(this.state.owner, this.props.token);
    this.setState({
      owner: ''
    });
  }

  render() {
    const {classes} = this.props;
    const {modal : modalStyle} = styles;
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

const Main = connect(mapStateToProps, mapDispatchToProps, null)(MainComponent)

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
  account: PropTypes.object
};

export default MainPage;