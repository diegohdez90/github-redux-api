import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../styledComponents/Container'
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
class Main extends React.Component {
  render() {
    return (<Container>
      <GetToken />
      <Form />
      </Container>);
  }
}

Main.propTypes ={
  username: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  repos: PropTypes.array
}

export default Main;