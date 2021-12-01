import styles from './Modal.module.scss';

const Modal = ({ clientId, dateRequest, parentName }) => {
  return (
    <div className={styles.header}>
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
        <button className={styles.yes}>Yes</button>
      </div>
    </div>
  );
};

export default Modal;
