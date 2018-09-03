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

  componentWillReceiveProps (nextProps) {
    if (nextProps.repoOpen !== nextProps.name) {
      this.setState({
        toggleIssues: false,
      });
    } else {
      this.setState({
        toggleIssues: true,
      });
    }
  }

  toggleDetails = () => {
    this.setState({
      toggleIssues: !this.state.toggleIssues,
    });
  }

  render () {
    const { watches, stars, forks, name, onStarRepoEventHandler, onOpenRepoDetails, repoOpen, isRepoOpen } = this.props;
    const details = (this.state.toggleIssues && repoOpen) ? (<div>
      <Watches watches={watches} repo={name} />
      <Stars
        stars={stars}
        repo={name}
        onStarRepoEventHandler={onStarRepoEventHandler}
      />
      <Forks forks={forks} repo={name} />
    </div>) : null;

    return (
      <div>
        <div onClick={() => {
          this.toggleDetails();
          onOpenRepoDetails(name, !isRepoOpen);
        }}>
          <h6 className="show-repo-details">{(this.state.toggleIssues && repoOpen) ? 'Hide repository details' : 'See repository details'}</h6>
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
  onStarRepoEventHandler: PropTypes.func,
  repoOpen: PropTypes.string,
  isRepoOpen: PropTypes.bool,
};

export default RepoDetails;
