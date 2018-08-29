import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../styledComponents/Input';
import Label from '../../styledComponents/Label';
import { updateGithubAccount, fetchUserRepos, fetchAccount } from '../../actions';
import Button from '../../styledComponents/Button';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {  
  return {
    token: state.reducer.token
  }
}

const mapDispatchToProps = dispatch => {  
  return {
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

class FormComponent extends Component {

  constructor() {
    super();

    this.state = {
      githubAccount: ''
    };

    this.onChangeGithubAccount = this.onChangeGithubAccount.bind(this);
    this.onHandleSubmitGithubAccount = this.onHandleSubmitGithubAccount.bind(this);
  }

  onChangeGithubAccount(ev) {
    this.setState({ githubAccount: ev.target.value })
  }

  onHandleSubmitGithubAccount(ev) {
    ev.preventDefault();
    this.props.updateGithubAccount(this.state.githubAccount);
    console.log('state form', this.state);
    this.props.fetchUser(this.state.githubAccount, this.props.token);
    this.props.fetchUserRepos(this.state.githubAccount, this.props.token);
    this.setState({githubAccount: ''})
  }

  render () {
    return (<form onSubmit={this.onHandleSubmitGithubAccount}>
        <Label>User:
          <Input
            name="githubAccount"
            value={this.state.githubAccount}
            onChange={this.onChangeGithubAccount}
            placeholder="Type a Github user" />
        </Label>
        <Button type="submit">Find User</Button>
      </form>)
  }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent)

FormComponent.propTypes = {
  token: PropTypes.string,
  onChangeGithubAccount: PropTypes.func,
  onHandleSubmitGithubAccount: PropTypes.func
};

export default Form;