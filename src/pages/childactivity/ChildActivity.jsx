import React from 'react';
import styles from './assets/ChildActivity.module.scss';
import datas from './data';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';

export default function ChildActivity() {
  return (
    <div className={styles.containers}>
      <h3>Child Activity</h3>
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
              <button className={styles.actionButton}>&bull;&bull;&bull;</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
