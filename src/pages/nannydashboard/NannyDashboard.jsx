import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './assets/NannyDashboard.module.scss';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getClients, getActiveClients } from '../../store/actions/clients';
import {
  getActiveNannies,
  getAppointment,
  updateAppointmentStatus,
} from '../../store/actions/nannies';
// import Stack from '@mui/material/Stack';
// import LinearProgress from '@mui/material/LinearProgress';

export default function NannyDashboard() {
  // const { data } = props;
  // console.log(data);
  const dispatch = useDispatch();
  const { loading, clients } = useSelector((state) => state.clients);
  const activeClient = useSelector((state) => state.clients.activeClient);
  const nannies = useSelector((state) => state.nannies);
  console.log('clients list', clients);
  useEffect(() => {
    dispatch(getActiveNannies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getActiveClients());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  const [acceptStatus, setAcceptStatus] = useState({
    appointment_id: '',
    appointment_status: 'Accept',
  });
  console.log(acceptStatus);
  const [rejectStatus, setRejectStatus] = useState({
    appointment_id: '',
    appointment_status: 'Reject',
  });
  console.log(rejectStatus);

  // const getIdAccept = (id) => {
  //   setAcceptStatus({
  //     appointment_id: id,
  //   });
  // };
  // const getIdReject = (id) => {
  //   setRejectStatus({
  //     appointment_id: id,
  //   });
  // };

  const node = useRef();

  const [open, setOpen] = useState(0);

  useEffect(() => {}, [open]);

  // const handleClick = (e, index) => {
  //   if (!e.target.closest(`.${node.current.class}`) && open) {
  //     setOpen(0);
  //   }
  //   console.log(node.current);
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClick);
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>New Appointment</h5>
            <h2>{nannies?.appointment?.count}</h2>
          </div>
          <img src={appointment} alt="" />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Client</h5>
            <h2>{activeClient?.data?.count}</h2>
          </div>
          <img src={client} alt="" />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Nanny</h5>
            <h2>{nannies?.activeNanny?.activeNanny}</h2>
          </div>
          <img src={nanny} alt="" />
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
          {loading
            ? 'wait a minute'
            : clients?.map((item, index) => {
                return (
                  <tr id={item.appointment_id} key={index}>
                    <td>{item?.date_request}</td>
                    <td>{item?.child?.parent?.name}</td>
                    <td>{item?.child?.parent?.client_id}</td>
                    <td>{item?.child?.name}</td>
                    <td>
                      <p
                        className={
                          item?.appointment_status === 'Pending'
                            ? styles.pending
                            : item?.appointment_status === 'Accept'
                            ? styles.active
                            : styles.reject
                        }
                      >
                        {item?.appointment_status}
                      </p>
                    </td>
                    <td>
                      <div className={styles.dropdown} id={item.appointment_id} ref={node}>
                        <button
                          className={styles.dropbtn}
                          onClick={(e) => setOpen(index + 1)}
                          // onMouseOut={(e) => setOpen(0)}
                        >
                          &bull;&bull;&bull;
                        </button>
                        <div className={styles.dropdownContent}>
                          {open === index + 1 && (
                            <div>
                              <button
                              // onClick={
                              //   (() => getIdAccept(item.appointment_id),
                              //   setInterval(dispatch(getUpdateAppointment(acceptStatus)), 500))
                              // }
                              >
                                <span>
                                  <BsCheck2Circle
                                    style={{ color: '#10B278', position: 'relative', top: '2px' }}
                                  />
                                </span>{' '}
                                Accept Client
                              </button>
                              <button
                              // onClick={
                              //   (() => getIdReject(item.appointment_id),
                              //   setInterval(dispatch(getUpdateAppointment(rejectStatus)), 500))
                              // }
                              >
                                <span
                                  style={{ color: '#F67979', position: 'relative', top: '2px' }}
                                >
                                  <BiXCircle />
                                </span>{' '}
                                Reject Client
                              </button>
                              <Link to={`/dashboard/clientdetail/${item.appointment_id}`}>
                                <span
                                  style={{ color: '#768471', position: 'relative', top: '2px' }}
                                >
                                  <AiOutlineInfoCircle />
                                </span>{' '}
                                View Details
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
        </table>
        <div className={styles.add}>
          <Link to="/dashboard/clientlist">{''} See All Client List</Link>
        </div>
      </div>
    </div>
  );
}
