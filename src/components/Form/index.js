import React, { Component } from 'react';
import Input from '../../styledComponents/Input';
import Label from '../../styledComponents/Label';

class Form extends Component {
  render () {
    return (<form>
        <Label>User:
          <Input placeholder="Type a Github user" />
        </Label>
      </form>)
  }
}

export default Form;