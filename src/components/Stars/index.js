import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Star } from "@githubprimer/octicons-react";
import SpanGithub from '../../styledComponents/GithubComponent';

const Stars = ({ stars }) => (<SpanGithub>{stars}<Octicon icon={Star} size='medium' verticalAlign='middle' /></SpanGithub>)

Star.propTypes = {
  stars: PropTypes.number
};

export default Stars;