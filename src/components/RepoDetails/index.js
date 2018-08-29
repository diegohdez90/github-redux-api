import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';

const RepoDetails = ({watches, stars, forks, name}) => (
  <div>
    <Watches watches={watches} repo={name}/>
    <Stars stars={stars} repo={name} />
    <Forks forks={forks} />
  </div>);

RepoDetails.propTypes ={
  name: PropTypes.string,
  watches: PropTypes.number,
  stars: PropTypes.number,
  forks: PropTypes.number
}

export default RepoDetails;
