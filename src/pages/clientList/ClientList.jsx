import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';
import styles from './assets/ClientList.module.scss';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import previousIcon from './assets/svg/previousicon.svg';
import nextIcon from './assets/svg/nexticon.svg';

function createData(dateRequest, parentName, clientId, childrenName) {
  return { dateRequest, parentName, clientId, childrenName };
}

const clientDetail = [
  createData('3/11/2021 07:00 PM', 'Yugi Muto', '#000123', 'Yugi Muto'),
  createData('3/11/2021 07:00 PM', 'Nobitakun', '#000123', 'Nobitakun'),
  createData('3/11/2021 07:00 PM', 'Nobitakun Desu Ne', '#000123', 'Nobitakun Desu Ne'),
  createData('3/11/2021 07:00 PM', 'Nobitakun', '#000123', 'Nobitakun'),
];

export default function ClientList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleCLose = () => {
    window.onclick = () => {
      setOpen(false);
    };
  };

  return (
    <div className={styles.dashboard}>
      <h3>Client List</h3>
      <div className={styles.table}>
        <table>
          <tr>
            <th>Date Request</th>
            <th>Parent Name</th>
            <th>Client ID</th>
            <th>Children Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {clientDetail.map((item) => (
            <tr>
              <td>{item.dateRequest}</td>
              <td>{item.parentName}</td>
              <td>{item.clientId}</td>
              <td>{item.childrenName}</td>
              <td>
                <div className={styles.dropdown}>
                  <button className={styles.statusButton}>Active</button>
                  <div className={styles.dropdownContent}>
                    <a className={styles.accept} onClick={() => handleClick()}>
                      <span style={{ color: '#10B278', position: 'relative', top: '2px' }}>
                        <BsCheck2Circle />
                      </span>{' '}
                      Accept Client
                    </a>
                    <a href="x">
                      <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                        <BiXCircle />
                      </span>{' '}
                      Reject Client
                    </a>
                    <Link to="#">
                      <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                        <AiOutlineInfoCircle />
                      </span>{' '}
                      View Details
                    </Link>
                    <div onClick={() => handleCLose()} className={open === true ? styles.modalOnClick : styles.modal}>
                      <Modal clientId={item.clientId} dateRequest={item.dateRequest} parentName={item.parentName} />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
              </td>
            </tr>
          ))}

          {/*
          <tr>
            <td className={styles.noBorder}>3/11/2021 07:00 PM</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>#000123</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>
              <div className={styles.dropdown}>
                <button className={styles.statusButton}>Active</button>
                <div className={styles.dropdownContent}>
                  <a href="x">
                    <span>
                      <BsCheck2Circle style={{ color: '#10B278', position: 'relative', top: '2px' }} />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href="x">
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to="#">
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
            <td className={styles.noBorder}>
              <button className={styles.actionButton}>&bull;&bull;&bull;</button>
            </td>
          </tr>*/}
        </table>
        <div className={styles.footer}>
          <p>Showing 10 of {clientDetail.length}</p>
          <div>
            <button>
              <img src={previousIcon} />
              Previous
            </button>
            <button style={{ marginLeft: '1.5rem' }}>
              Next
              <img src={nextIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
