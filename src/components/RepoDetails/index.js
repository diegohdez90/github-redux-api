import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';

const RepoDetails = ({stars, forks}) => (
  <div>
    <Stars stars={stars} />
    <Forks forks={forks} />
  </div>);

RepoDetails.propTypes ={
  toggle: PropTypes.bool,
  stars: PropTypes.number,
  forks: PropTypes.number
}

export default RepoDetails;
