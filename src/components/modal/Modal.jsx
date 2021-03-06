import styles from './Modal.module.scss';
import { updateStatusAppointment } from '../../store/actions/clients';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Modal = ({ idAppointment, clientId, dateRequest, parentName }) => {
  const dispatch = useDispatch();

  const [statusAccept, setStatusAccept] = useState({
    appointment_id: null,
    appointment_status: '',
  });

  const [setAnchorEl] = useState(null);

  const handleAcceptClient = () => {
    setStatusAccept((statusAccept.appointment_id = idAppointment));
    setStatusAccept((statusAccept.appointment_status = 'Accept'));

    dispatch(updateStatusAppointment(statusAccept));
    setAnchorEl(null);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header} onClick={(e) => e.stopPropagation()}>
        <h4>Are You Sure You Want to Accept This Client?</h4>
        <ul>
          <li style={{ marginBottom: '16px' }}>
            Client ID <span>: </span>
            {clientId}
          </li>
          <li style={{ marginBottom: '16px' }}>
            Date Request <span>: </span>
            {dateRequest}
          </li>
          <li>
            Parent Name <span>: </span>
            {parentName}
          </li>
        </ul>
        <div>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.yes} onClick={handleAcceptClient}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
