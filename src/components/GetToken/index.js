import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Label from '../../styledComponents/Label';
import Input from '../../styledComponents/Input';
import Button from '../../styledComponents/Button';
import { updateUsernameToken,
  updatePasswordToken,
  fetchGetToken } from '../../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (username) => {
      dispatch(updateUsernameToken(username))
    },
    updatePassword: (password) => {
      dispatch(updatePasswordToken(password))
    },
    fetchUserToken: (username, password) => {
      console.log('calling User Token', username, password);
      
      dispatch(fetchGetToken(username, password))
    }
  }
}

class GetTokenComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onHandlerGetToken = this.onHandlerGetToken.bind(this);
  }

  onChangeUsername(ev) {
    this.setState({
      username: ev.target.value
    });
    this.props.updateUsername(ev.target.value);
  }

  onChangePassword(ev) {
    this.setState({
      password: ev.target.value
    });
    this.props.updatePassword(ev.target.value);
  }

  onHandlerGetToken(ev) {
    ev.preventDefault();
    this.props.fetchUserToken(this.state.username, this.state.password);
  }

  render () {
    return (<form onSubmit={this.onHandlerGetToken}>
      <Label>
      Username: <Input
        name="username"
        onChange={this.onChangeUsername}
        />
      </Label>
      <Label>
        Password <Input
        type='password'
        onChange={this.onChangePassword}
        />
      </Label>
      <Button>Get Token</Button>
    </form>)
  }
}

const GetToken = connect(null, mapDispatchToProps)(GetTokenComponent);

GetTokenComponent.propTypes = {
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onHandlerGetToken: PropTypes.func
};

export default GetToken;
