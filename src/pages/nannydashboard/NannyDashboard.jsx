/* eslint-disable no-const-assign */
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './assets/NannyDashboard.module.scss';
import Modal from '../../components/modal/Modal';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';
import { Button, Menu, MenuItem } from '@mui/material';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMainClients, getActiveClients } from '../../store/actions/clients';
import {
  getActiveNannies,
  getAppointment,
  updateAppointmentStatus,
} from '../../store/actions/nannies';
import io from 'socket.io-client';
import { baseUrl } from '../../store/sagas/config';
import ReactLoading from 'react-loading';

export default function NannyDashboard() {
  const socket = io(`${baseUrl()}`);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, mainClients } = useSelector((state) => state.clients);
  const activeClient = useSelector((state) => state.clients.activeClient);
  const nannies = useSelector((state) => state.nannies);

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
    dispatch(getMainClients());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClientDetail = (appointment_id) => {
    navigate(`/dashboard/clientdetail/${appointment_id}`);
  };

  const [statusReject, setStatusReject] = useState({
    appointment_id: null,
    appointment_status: '',
  });

  const [openMessage, setOpenMessage] = useState(false);

  const handleRejectClient = () => {
    setStatusReject((statusReject.appointment_id = selectedItem.appointment_id));
    setStatusReject((statusReject.appointment_status = 'Reject'));
    dispatch(updateAppointmentStatus(statusReject));
    setOpenMessage(!openMessage ? true : false);
  };

  const node = useRef();

  useEffect(() => {}, [open]);

  socket.on('refreshAwaitingAppointment', function (data) {
    // refresh main clients table data on nanny dashboard
    mainClients = data;
    dispatch(getMainClients());
  });
  socket.on('refreshActiveNannies', function (data) {
    // refresh total active nannies on nanny dashboard
    nannies = data;
    dispatch(getAppointment());
    dispatch(getActiveNannies());
  });
  socket.on('refreshActiveClient', function (data) {
    // refresh total active clients on nanny dashboard
    activeClient = data;
    dispatch(getActiveClients());
  });

  const [openModal, setOpenModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState('');
  const modalValue = mainClients.find((data) => data.client_id === selectedItem);

  const handleModal = (clientId) => {
    setSelectedItem(clientId);
    setOpenModal(true);
  };

  const handleModalCLose = (e) => {
    setOpenModal(false);
  };

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>New Appointment</h5>
            <h2>{nannies?.appointment?.count}</h2>
          </div>
          <img src={appointment} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Client</h5>
            <h2>{activeClient?.data?.count}</h2>
          </div>
          <img src={client} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Nanny</h5>
            <h2>{nannies?.activeNanny?.activeNanny}</h2>
          </div>
          <img src={nanny} alt='' />
        </div>
      </div>
      <div className={styles.table}>
        <h1>Client List</h1>
        <table style={{ overflowX: 'auto' }}>
          <tr>
            <th>Date Request</th>
            <th>Parent Name</th>
            <th>Client ID</th>
            <th>Children Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {loading ? (
            <ReactLoading type={'spin'} color={'#10B278'} height={200} width={200} />
          ) : (
            mainClients?.map((item, index) => {
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
                      <Button
                        id='basic-button'
                        aria-controls='basic-menu'
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => handleClick(e, item)}
                        sx={{ color: 'black' }}
                      >
                        &bull;&bull;&bull;
                      </Button>
                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        elevation={1}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem
                          onClick={() => handleModal()}
                          disabled={selectedItem.appointment_status === 'Pending' ? false : true}
                        >
                          <span>
                            <BsCheck2Circle
                              style={{
                                color: '#10B278',
                                position: 'relative',
                                top: '3px',
                                marginRight: '5px',
                              }}
                            />
                          </span>
                          Accept Client
                        </MenuItem>
                        <MenuItem
                          onClick={handleRejectClient}
                          disabled={selectedItem.appointment_status === 'Pending' ? false : true}
                        >
                          <span
                            style={{
                              color: '#F67979',
                              position: 'relative',
                              top: '3px',
                              marginRight: '5px',
                            }}
                          >
                            <BiXCircle />
                          </span>
                          Reject Client
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            handleClientDetail(selectedItem.appointment_id);
                          }}
                          id={item.appointment_id}
                        >
                          <span
                            style={{
                              color: '#768471',
                              position: 'relative',
                              top: '3px',
                              marginRight: '5px',
                            }}
                          >
                            <AiOutlineInfoCircle />
                          </span>
                          View Details
                        </MenuItem>
                      </Menu>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </table>
        <div className={styles.add}>
          <Link to='/dashboard/clientlist'>{''} See All Client List</Link>
        </div>
        {openModal && (
          <div onClick={(e) => handleModalCLose(e)}>
            <Modal
              id={mainClients.appointment_id}
              clientId={modalValue.child?.parent?.client_id}
              dateRequest={modalValue.date_request}
              parentName={modalValue.child?.parent?.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}
