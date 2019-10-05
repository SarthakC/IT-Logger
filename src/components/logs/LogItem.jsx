import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min';

const LogItem = ({
  log: { id, tech, date, attention, message },
  deleteLog,
}) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: `Deleted log #${id} ${message}` });
  };

  return (
    <li className='collection-item'>
      <a
        href='#edit-log-modal'
        className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
      >
        {message}
      </a>
      <br />
      <span className='grey-text'>
        <span className='black-text'>ID # {id}</span> last updated by{' '}
        <span className='black-text'>{tech}</span>{' '}
        <Moment format='MMMM do YYYY, h:mm:ss a'>{date}</Moment>
      </span>
      <a href='#!' className='secondary-content' onClick={onDelete}>
        <i className='material-icons grey-text'>delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteLog },
)(LogItem);
