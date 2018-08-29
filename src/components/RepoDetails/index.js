import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';

const RepoDetails = ({watches, stars, forks}) => (
  <div>
    <Watches watches={watches} />
    <Stars stars={stars} />
    <Forks forks={forks} />
  </div>);

RepoDetails.propTypes ={
  watches: PropTypes.watches,
  stars: PropTypes.number,
  forks: PropTypes.number
}

export default RepoDetails;
