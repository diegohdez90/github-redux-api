import React from 'react';
import PropTypes from 'prop-types';
import ShowRepoDetails from '../ShowRepoDetails';
import Forks from '../Forks';

const RepoDetails = ({forks}) => (
  <div>
    <Forks forks={forks} />
  </div>);

RepoDetails.propTypes ={
  toggle: PropTypes.bool,
  forks: PropTypes.number
}

export default RepoDetails;
