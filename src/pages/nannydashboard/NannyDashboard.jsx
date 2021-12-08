import React from 'react';
import styles from './assets/NannyDashboard.module.scss';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function NannyDashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>New Appointment</h5>
            <h2>11</h2>
          </div>
          <img src={appointment} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Client</h5>
            <h2>11</h2>
          </div>
          <img src={client} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Nanny</h5>
            <h2>8</h2>
          </div>
          <img src={nanny} alt='' />
        </div>
      </div>
      <div className={styles.table}>
        <h1>Client List</h1>
        <table>
          <tr>
            <th>Date Request</th>
            <th>Parent Name</th>
            <th>Client ID</th>
            <th>Children Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Yugi Muto</td>
            <td>#000123</td>
            <td>Yugi Muto</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='clientdetail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun</td>
            <td>#000123</td>
            <td>Nobitakun</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='/dashboard/client-detail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun Desu Ne</td>
            <td>#000123</td>
            <td>Nobitakun Desu Ne</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='/dashboard/client-detail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Doraemon to Nani</td>
            <td>#000123</td>
            <td>Doraemon to Nani</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='/dashboard/client-detail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.noBorder}>3/11/2021 07:00 PM</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>#000123</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td className={styles.noBorder}>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='/dashboard/client-detail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <div className={styles.add}>
          <Link to='/dashboard/clientlist'>{''} See All Client List</Link>
        </div>
      </div>
    </div>
  );
}
