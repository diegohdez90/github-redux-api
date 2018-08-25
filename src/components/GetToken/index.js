import React from 'react';
import Label from '../../styledComponents/Label';
import Input from '../../styledComponents/Input';


class GetToken extends React.Component {
  render () {
    return (<form>
      <Label>
      Username: <Input />
      </Label>
      <Label>
        Password <Input type='password' />
      </Label>
    </form>)
  }
}

export default GetToken;
