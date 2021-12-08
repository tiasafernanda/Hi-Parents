import React from 'react';
import styles from './assets/ChildActivity.module.scss';
import datas from './data';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function ChildActivity() {
  return (
    <div className={styles.containers}>
      <h1>Child Activity</h1>
      <div className={styles.adjust}>
        <h5>Saturday, 3 November 2021</h5>
        <div className={styles.sortFilter}>
          <button>
            <BiSortUp style={{ position: 'relative', top: '1px' }} />
            Sort
          </button>
          <button>
            <HiOutlineAdjustments style={{ position: 'relative', top: '1px' }} />
            Filter
          </button>
        </div>
      </div>
      <table>
        <tr>
          <th>Date & Time</th>
          <th>Children Name</th>
          <th>Nanny</th>
          <th>Activity Detail</th>
          <th>Action</th>
        </tr>
        {datas.map((data) => (
          <tr>
            <td>{data.time}</td>
            <td>{data.childName}</td>
            <td>{data.nanny}</td>
            <td>{data.activity}</td>

            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <Link to='#'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
