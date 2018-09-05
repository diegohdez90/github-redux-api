import React from 'react';
import PropTypes from 'prop-types';

const Branches = ({
  branches,
  repo,
}) => (
  <table id={`table-branches-${repo}`}>
    <tbody>
      {branches.map((branch, index) => (
        <tr key={index}>
          <td>
            <div>
              <h4>{branch.name}</h4>
            </div>
          </td>
        </tr>))
      }
    </tbody>
  </table>
);

Branches.propTypes = {
  branches: PropTypes.array,
  repo: PropTypes.string,
};

export default Branches;
