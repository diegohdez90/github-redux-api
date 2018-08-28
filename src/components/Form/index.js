import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../styledComponents/Input';
import Label from '../../styledComponents/Label';
import { updateGithubAccount, fetchUserRepos } from '../../actions';
import Button from '../../styledComponents/Button';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {  
  return {
    updateGithubAccount: githubAccount => {
      dispatch(updateGithubAccount(githubAccount))
    },
    fetchUserRepos: (githubAccount) => {
      dispatch(fetchUserRepos(githubAccount))
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
    this.props.fetchUserRepos(this.state.githubAccount);
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

const Form = connect(null, mapDispatchToProps)(FormComponent)

FormComponent.propTypes = {
  onChangeGithubAccount: PropTypes.func,
  onHandleSubmitGithubAccount: PropTypes.func
};

export default Form;