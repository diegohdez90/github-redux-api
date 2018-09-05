import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// "created_at": "2018-08-21T16:20:28Z",
// "updated_at": "2018-08-22T16:33:08Z",
const TableIssues = ({issues, repo}) => (
  <table id={`table-issues-${repo}`}>
    <tbody>
      { issues.map(issue => (
        <tr key={issue.number}>
          <td>
            <div>
              <h3 className="title-issue">{issue.title}</h3>
              <span>#{issue.number} {(issue.state === 'open') ? `opened on ${moment(issue.created_at, 'YYYYMMDD').fromNow()} by ${issue.user.login}` : `by ${issue.user.login} closed on ${moment(issue.closed_at, 'YYYYMMDD').fromNow()}`}</span>
            </div>
          </td>
        </tr>))
      }
    </tbody>
  </table>);

TableIssues.propTypes = {
  issues: PropTypes.array,
};

export default TableIssues;
