import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// "created_at": "2018-08-21T16:20:28Z",
// "updated_at": "2018-08-22T16:33:08Z",
const TablePull = ({ pulls, repo }) => (
  <table id={`table-pull-${repo}`}>
    <tbody>
      {pulls.map(pull => (
        <tr key={pull.number}>
          <td>
            <div>
              <h3 className="title-issue">{pull.title}</h3>
              <span>#{pull.number} {(pull.state === 'open') ? `opened on ${moment(pull.created_at, 'YYYYMMDD').fromNow()} by ${pull.user.login}` : `by ${pull.user.login} closed on ${moment(pull.closed_at, 'YYYYMMDD').fromNow()}`}</span>
            </div>
          </td>
        </tr>))
      }
    </tbody>
  </table>);

TablePull.propTypes = {
  issues: PropTypes.array,
};

export default TablePull;
