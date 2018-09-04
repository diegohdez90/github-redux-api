import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../styles/Title';
import TableIssue from './Table';

class Issues extends React.Component {
  render () {
    const { issues, repo } = this.props;
    const title = (<Title>Issues</Title>);
    const props = {issues, repo};
    return (<div>{title}<TableIssue {...props} /></div>);
  }
}

Issues.propTypes = {
  repo: PropTypes.string,
  issues: PropTypes.array,
};

export default Issues;
