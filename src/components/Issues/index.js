import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import Title from '../../styles/Title';
import TableIssue from './Table';

class Issues extends React.Component{

  constructor (props) {
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

  onChangeIssueTab = (e, value) => {
    this.setState({
      status: value,
    });
    this.props.onChangeIssueTab(value);
  }

  render () {
    const {status} = this.state;
    return (<div>
      <Title>Issues</Title>
      <Tabs value={status} onChange={this.onChangeIssueTab}>
        <Tab label='Open'></Tab>
        <Tab label='Closed'></Tab>
        <Tab label='Both'></Tab>
      </Tabs>
      {status === 0 && <TableIssue {...this.props} />}
      {status === 1 && <TableIssue {...this.props} />}
      {status === 2 && <TableIssue {...this.props} />}
    </div>);
  }
}
Issues.propTypes = {
  repo: PropTypes.string,
  issues: PropTypes.array,
  onChangeIssueTab: PropTypes.func,
};

export default Issues;
