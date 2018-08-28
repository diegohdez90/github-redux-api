import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../styledComponents/Container'
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
import Repos from '../../components/Repos';
class Main extends React.Component {

  render() {
    return (<Container>
      <GetToken/>
      <Form />
      <Repos />
    </Container>);
  }
}

export default Main;