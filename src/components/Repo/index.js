import React from 'react';
import PropTypes from 'prop-types';
import RepoElement from '../../styledComponents/RepoElement';

const Repo = ({repo}) => (
  <RepoElement>
    {repo.name}
  </RepoElement>
)

Repo.propTypes = {
  repos: PropTypes.object
};

export default Repo;