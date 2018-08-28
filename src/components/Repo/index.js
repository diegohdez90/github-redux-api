import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({repo}) => (
  <li>{repo.name}</li>
)

Repo.propTypes = {
  repos: PropTypes.object
};

export default Repo;