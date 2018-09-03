import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Button from '../../styles/Button';

const Form = ({
  onChangeGithubAccount,
  onHandleSubmitGithubAccount,
  githubOwner,
}) => (<form onSubmit={onHandleSubmitGithubAccount}>
  <Label>User:
    <Input
      value={githubOwner}
      name="githubAccount"
      onChange={onChangeGithubAccount}
      placeholder="Type a Github user" />
  </Label>
  <Button type="submit">Find User</Button>
</form>);

Form.propTypes = {
  onChangeGithubAccount: PropTypes.func,
  onHandleSubmitGithubAccount: PropTypes.func,
  githubOwner: PropTypes.string,
};

export default Form;
