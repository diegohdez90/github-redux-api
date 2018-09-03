import React from 'react';
import PropTypes from 'prop-types';
import Forks from '../Forks';
import Stars from '../Stars';
import Watches from '../Watches';

class RepoDetails extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      toggleIssues: false,
    };
  }

  toggleDetails = () => {
    this.setState({
      toggleIssues: !this.state.toggleIssues,
    });
  }

  componentWillUpdate (props, state) {
    if (state.toggleIssues) this.props.onOpenRepoDetails(this.props.name);
  }
  render () {
    const { watches, stars, forks, name } = this.props;
    const details = (this.state.toggleIssues) ? (<div>
      <Watches watches={watches} repo={name} />
      <Stars stars={stars} repo={name} />
      <Forks forks={forks} repo={name} />
    </div>) : null;
    return (
      <div>
        <div onClick={() => this.toggleDetails()}>
          <h6 className="show-repo-details">{(this.state.toggleIssues) ? 'Hide repository details' : 'See repository details'}</h6>
        </div>
        {details}
      </div>);
  }
}

RepoDetails.propTypes = {
  name: PropTypes.string,
  watches: PropTypes.number,
  stars: PropTypes.number,
  forks: PropTypes.number,
  onOpenRepoDetails: PropTypes.func,
};

export default RepoDetails;
