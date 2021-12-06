import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';
import styles from './assets/ClientList.module.scss';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import previousIcon from './assets/svg/previousicon.svg';
import nextIcon from './assets/svg/nexticon.svg';

function createData(dateRequest, parentName, clientId, childrenName, status) {
  return { dateRequest, parentName, clientId, childrenName, status };
}

const clientDetail = [
  createData('3/11/2021 07:00 PM', 'Yugi Muto', '#000120', 'Yugi Muto', 0),
  createData('3/11/2021 07:00 PM', 'Nobitakun', '#000121', 'Nobitakun', 1),
  createData('3/11/2021 07:00 PM', 'Nobitakun Desu Ne', '#000122', 'Nobitakun Desu Ne', 1),
  createData('3/11/2021 07:00 PM', 'Doraemon to Nani', '#000123', 'Doraemon to Nani', 1),
  createData('3/11/2021 07:00 PM', 'Sugoi Desu', '#000123', 'Sugoi Desu', 2),
];

export default function ClientList() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const modalValue = clientDetail.find((data) => data.clientId === selectedItem);

  const handleClick = (clientId) => {
    setSelectedItem(clientId);
    setOpen(true);
  };

  const handleCLose = (e) => {
    setOpen(false);
  };

  console.log(modalValue);

  return (
    <div className={styles.dashboard}>
      <h1>Client List</h1>
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
            <tr className={styles.row}>
              <td>{item.dateRequest}</td>
              <td>{item.parentName}</td>
              <td>{item.clientId}</td>
              <td>{item.childrenName}</td>
              <td>
                <div className={styles.dropdown}>
                  <button
                    className={
                      item.status === 1
                        ? styles.statusActive
                        : item.status === 2
                        ? styles.statusReject
                        : styles.statusPending
                    }
                  >
                    {item.status === 1 ? 'Active' : item.status === 2 ? 'Reject' : 'Pending'}
                  </button>
                  {item.status === 0 && (
                    <div className={styles.dropdownContent}>
                      <a
                        href='#'
                        className={styles.accept}
                        onClick={() => handleClick(item.clientId)}
                      >
                        <span style={{ color: '#10B278', position: 'relative', top: '2px' }}>
                          <BsCheck2Circle />
                        </span>{' '}
                        Accept Client
                      </a>
                      <a href='x'>
                        <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                          <BiXCircle />
                        </span>{' '}
                        Reject Client
                      </a>
                      <Link to='#'>
                        <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                          <AiOutlineInfoCircle />
                        </span>{' '}
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
              </td>
              <td>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                {item.status === 0 && (
                    <div className={styles.dropdownContent}>
                      <a
                        href='#'
                        className={styles.accept}
                        onClick={() => handleClick(item.clientId)}
                      >
                        <span style={{ color: '#10B278', position: 'relative', top: '2px' }}>
                          <BsCheck2Circle />
                        </span>{' '}
                        Accept Client
                      </a>
                      <a href='x'>
                        <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                          <BiXCircle />
                        </span>{' '}
                        Reject Client
                      </a>
                      <Link to='#'>
                        <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                          <AiOutlineInfoCircle />
                        </span>{' '}
                        View Details
                      </Link>
                    </div>
                  )}
              </td>
            </tr>
          ))}
        </table>
        <div className={styles.footer}>
          <p>Showing 10 of {clientDetail.length}</p>
          <div>
            <button>
              <img src={previousIcon} alt='' />
              Previous
            </button>
            <button style={{ marginLeft: '1.5rem' }}>
              Next
              <img src={nextIcon} alt='' />
            </button>
          </div>
        </div>
        {open && (
          <div onClick={(e) => handleCLose(e)}>
            <Modal
              clientId={modalValue.clientId}
              dateRequest={modalValue.dateRequest}
              parentName={modalValue.parentName}
            />
          </div>
        )}
      </div>
    </div>
  );
}
