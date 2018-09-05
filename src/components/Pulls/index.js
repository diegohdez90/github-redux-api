import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from '@material-ui/core';
import TablePulls from './Table';
import Title from '../../styles/Title';

class Pull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * 0: open
       * 1: closed:
       * 2: both
       */
      status: 0,
    };
  }

  onChangePullTab = (e, value) => {
    this.setState({
      status: value,
    });
    this.props.onChangePullTab(value);
  }

  render () {
    const {status} = this.state;
    return (<div>
      <Title>Pull Request</Title>
      <Tabs value={status} onChange={this.onChangePullTab}>
        <Tab label='Open'></Tab>
        <Tab label='Closed'></Tab>
        <Tab label='Both'></Tab>
      </Tabs>
      { status === 0 && <TablePulls {...this.props} />}
      { status === 1 && <TablePulls {...this.props} />}
      { status === 2 && <TablePulls {...this.props} />}
    </div>);
  }
}
Pull.propTypes = {
  pulls: PropTypes.array,
  repo: PropTypes.string,
  onChangePullTab: PropTypes.func,
};

export default Pull;
