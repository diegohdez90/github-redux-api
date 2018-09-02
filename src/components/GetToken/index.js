import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import Button from '../../styles/Button';

const GetToken = ({
  onChangeUsername,
  onChangePassword,
  onHandlerGetToken
}) => (<form onSubmit={onHandlerGetToken}>
      <Label>
      Username: <Input
        name="username"
        onChange={onChangeUsername}
        />
      </Label>
      <Label>
        Password <Input
        type='password'
        onChange={onChangePassword}
        />
      </Label>
      <Button>Get Token</Button>
    </form>);

GetToken.propTypes = {
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onHandlerGetToken: PropTypes.func
};

export default GetToken;
