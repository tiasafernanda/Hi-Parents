import React from 'react';
import styles from './assets/NannyDashboard.module.scss';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';

export default function NannyDashboard() {
  return (
    <div className={styles.dashboard}>
      <h3>Dashboard</h3>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>New Appointment</h5>
            <h1>11</h1>
          </div>
          <img src={appointment} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Client</h5>
            <h1>11</h1>
          </div>
          <img src={client} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Nanny</h5>
            <h1>8</h1>
          </div>
          <img src={nanny} alt='' />
        </div>
      </div>
      <div className={styles.table}>
        <h3>Client List</h3>
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
              <button>Active</button>
            </td>
            <td>
              <button>&bull;&bull;&bull;</button>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun</td>
            <td>#000123</td>
            <td>Nobitakun</td>
            <td>
              <button>Active</button>
            </td>
            <td>
              <button>&bull;&bull;&bull;</button>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun Desu Ne</td>
            <td>#000123</td>
            <td>Nobitakun Desu Ne</td>
            <td>
              <button>Active</button>
            </td>
            <td>
              <button>&bull;&bull;&bull;</button>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Doraemon to Nani</td>
            <td>#000123</td>
            <td>Doraemon to Nani</td>
            <td>
              <button>Active</button>
            </td>
            <td>
              <button>&bull;&bull;&bull;</button>
            </td>
          </tr>
          <tr>
            <td className={styles.noBorder}>3/11/2021 07:00 PM</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>#000123</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>
              <button>Active</button>
            </td>
            <td className={styles.noBorder}>
              <button>&bull;&bull;&bull;</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
