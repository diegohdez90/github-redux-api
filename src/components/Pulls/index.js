import React from 'react';
import PropTypes from 'prop-types';
import TablePulls from './Table';
import Title from '../../styles/Title';

const Pull = props => (
  <div><Title>Pull Request</Title><TablePulls {...props} /></div>
);

Pull.propTypes = {
  pulls: PropTypes.array,
  repo: PropTypes.string,
};

export default Pull;
