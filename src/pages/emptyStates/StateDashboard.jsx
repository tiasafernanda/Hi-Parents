import React from 'react';
import styles from './assets/StateDashboard.module.scss';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';
import family from './assets/img/family.png';
// import { BsCheck2Circle } from "react-icons/bs";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { BiXCircle } from "react-icons/bi";
// import { Link } from "react-router-dom";

export default function StateDashboard() {
  const dummyClient = [];
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
        <h3 className={styles.clientList}>Client List</h3>
        <table>
          <tr>
            <th>Date Request</th>
            <th>Parent Name</th>
            <th>Client ID</th>
            <th>Children Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {dummyClient.length > 0 ? (
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          ) : (
            <tr>
              <td colspan='6'>
                <div className={styles.noClient}>
                  <img src={family} alt='' />
                  <h5>No Client list for today</h5>
                </div>
              </td>
            </tr>
          )}
        </table>
        <button
          style={{
            width: '14rem',
            backgroundColor: '#F67979',
            borderRadius: '2rem',
            color: 'white',
            borderStyle: 'none',
            height: '3rem',
            marginTop: '1rem',
            marginLeft: '42rem',
          }}
        >
          See All Client List
        </button>
      </div>
    </div>
  );
}
