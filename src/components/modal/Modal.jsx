import styles from './Modal.module.scss';
import { updateClientAccepted } from '../../store/actions/clients';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ clientId, dateRequest, parentName }) => {
  const dispatch = useDispatch();
  const { loading, clients } = useSelector((state) => state.clients);
  console.log('clients list', clients);

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
          <button className={styles.yes} onClick={dispatch(updateClientAccepted())}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
