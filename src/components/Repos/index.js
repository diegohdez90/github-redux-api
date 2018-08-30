import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../Repo';
const mapStateToProps = (state) => {  
  return {
    repos: state.reducer.repos,
    account: state.reducer.account 
  }
}

const Repos = ({repos, account}) => (Array.isArray(repos)) ? (
  <div>
    {(account) ? <h3>{account.name} has {account.public_repos} public repositories</h3> : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>)}
    <ul>
    {
      repos.map(repo => <Repo key={repo.id} repo={repo} />)
    }
    </ul>
  </div>) : (<div className="no-repos"><h3 className="no-repos-found">No repos</h3></div>)

Repos.propTypes = {
  account: PropTypes.object,
  repos: PropTypes.array
}

export default connect(mapStateToProps, null, null)(Repos)