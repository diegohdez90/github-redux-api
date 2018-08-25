import React from 'react';
import Container from '../../styledComponents/Container'
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
class Index extends React.Component {
  render() {
    return (<Container>
      <GetToken />
      <Form />
      </Container>);
  }
}

export default Index;