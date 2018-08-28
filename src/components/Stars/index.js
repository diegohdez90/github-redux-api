import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Star } from "@githubprimer/octicons-react";

const Stars = ({ stars }) => (<div>{stars}<Octicon icon={Star} size='medium' verticalAlign='middle' /></div>)

Star.propTypes = {
  stars: PropTypes.number
};

export default Stars;