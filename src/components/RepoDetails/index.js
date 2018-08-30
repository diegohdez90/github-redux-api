import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';
import Issues from '../Issues';

class RepoDetails extends React.Component {

  constructor () {
    super();
    this.state = {
      toggleIssues: false
    };
  }

  toggleIssuesTable () {
    this.setState({
      toggleIssues: true
    });
  }
  render () {
    const { watches, stars, forks, name } = this.props;
    return (
      <div>
        <div onClick={() => this.toggleIssuesTable()}>
          {(this.state.toggleIssues) ? (
            <div>
              <Watches watches={watches} repo={name} />
              <Stars stars={stars} repo={name} />
              <Forks forks={forks} />
              <Issues />
            </div>
          ) : <h6 className="show-repo-details">See repository details</h6> }
        </div>
      </div>);
  }
}

RepoDetails.propTypes ={
  name: PropTypes.string,
  watches: PropTypes.number,
  stars: PropTypes.number,
  forks: PropTypes.number,
  id: PropTypes.number,
}

export default RepoDetails;
