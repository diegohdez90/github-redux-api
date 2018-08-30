import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';
import Issues from '../Issues';
import Title from '../../styles/Title';

class RepoDetails extends React.Component {

  constructor () {
    super();
    this.state = {
      toggleIssues: false
    };
  }

  toggleIssuesTable () {
    this.setState({
      toggleIssues: !this.state.toggleIssues
    });
  }
  render () {
    const { watches, stars, starred, forks, name } = this.props;
    return (
      <div>
        <Watches watches={watches} repo={name} />
        <Stars starred={starred} stars={stars} repo={name} />
        <Forks forks={forks} />
        <div onClick={() => this.toggleIssuesTable()}>
          {(this.state.toggleIssues) ? <Issues /> : <Title>Looking for Issues</Title> }
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
  starred: PropTypes.number
}

export default RepoDetails;
