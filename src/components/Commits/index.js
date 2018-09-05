import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// 2018-09-05T17:22:56Z
const Commits = ({
  repo,
  commits,
}) => (<table id={`table-commits-${repo}`}>
  <tbody>
    {commits.map((commit, index) => (
      <tr key={index}>
        <td>
          <div>
            <h4>{commit.commit.message}</h4>
            <span>{commit.author.login} commited {moment(new Date(commit.commit.author.date)).format('D MMM YYYY')}</span>
          </div>
        </td>
      </tr>))
    }
  </tbody>
</table>);

Commits.propTypes = {
  repo: PropTypes.string,
  commits: PropTypes.array,
};

export default Commits;
