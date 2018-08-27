import React from 'react';
import Label from '../../styledComponents/Label';
import Input from '../../styledComponents/Input';
import Button from '../../styledComponents/Button';

class GetToken extends React.Component {
  render () {
    return (<form>
      <Label>
      Username: <Input />
      </Label>
      <Label>
        Password <Input type='password' />
      </Label>
      <Button>Get Token</Button>
    </form>)
  }
}

export default GetToken;
