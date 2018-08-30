import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RepoElement from '../../styles/RepoElement';
import RepoDetails from '../RepoDetails';

const mapStateToProps = (state) => {
  return {
    starred: state.reducer.starred
  }
}

const isStarred = (starred, repository) => {
  if (starred) {
    return starred.findIndex((repo) => repo.id == repository.id)    
  }
  return -1;
}

const Repo = ({repo, starred}) => (<RepoElement>
    <h4>{repo.name}</h4>
    <RepoDetails
      name={repo.name}
      watches={repo.watchers}
      forks={repo.forks}
      stars={repo.stargazers_count}
      starred={isStarred(starred,repo)}
      follows={0}
    />
  </RepoElement>)

Repo.propTypes = {
  repo: PropTypes.object,
  starred: PropTypes.array
};

export default connect(mapStateToProps, null, null)(Repo);