import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../Repo';
const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    repos: state.reducer.repos,
    account: state.reducer.account 
  }
}

const Repos = ({repos, account}) => (repos) ? (
  <div>
    {account.name} has {account.public_repos} public repositories
    <ul>
    {
      repos.map(repo => <Repo key={repo.id} repo={repo} />)
    }
    </ul>
  </div>) : (<div>No repos</div>)

Repos.propTypes = {
  account: PropTypes.object,
  repos: PropTypes.array
}

export default connect(mapStateToProps, null, null)(Repos)