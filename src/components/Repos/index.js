import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../Repo';
const mapStateToProps = (state) => {
  console.log('Repos', state);
  
  return {
    repos: state.reducer.repos
  }
}

const Repos = ({repos}) => (repos) ? (
  <div>
    {repos.length}
    <ul>
    {
      repos.map(repo => <Repo repo={repo} />)
    }
    </ul>
  </div>) : (<div>No repos</div>)

Repos.propTyes = {
  repos: PropTypes.array
}

export default connect(mapStateToProps, null, null)(Repos)