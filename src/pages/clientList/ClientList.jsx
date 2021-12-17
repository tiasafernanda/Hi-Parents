import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import styles from './assets/ClientList.module.scss';
import { Button, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getClients, getActiveClients } from '../../store/actions/clients';
import { getActiveNannies, getAppointment } from '../../store/actions/nannies';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import previousIcon from './assets/previousicon.svg';
import nextIcon from './assets/nexticon.svg';
import closeIcon from './assets/close.png';
import sortIcon from './assets/sortIcon.svg';
import filterIcon from './assets/filterIcon.svg';

export default function ClientList() {
  const dispatch = useDispatch();
  const { loading, clients } = useSelector((state) => state.clients);
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClientDetail = (appointment_id) => {
    window.location.href = `/dashboard/clientdetail/${appointment_id}`;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Reject Message
  const [openMessage, setOpenMessage] = useState(false);
  const handleMessage = () => {
    setOpenMessage(!openMessage ? true : false);
  };

  //Table Map & Pagination
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);

  const nextTable = () => {
    if (lastIndex < clients.length) {
      setFirstIndex(firstIndex + 10);
      setLastIndex(lastIndex + 10);
    }
  };

  const previousTable = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 10);
      setLastIndex(lastIndex - 10);
    }
  };

  const showing = clients.length - firstIndex;
  console.log(showing, 'showing');

  //Modal
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal, 'modal');
  const [selectedItem, setSelectedItem] = useState('');
  const modalValue = clients.find((data) => data.client_Id === selectedItem);
  console.log(modalValue, 'modalValue');

  const handleModal = (clientId) => {
    setSelectedItem(clientId);
    setOpenModal(true);
  };

  const handleModalCLose = (e) => {
    setOpenModal(false);
  };

  return (
    <div className={styles.dashboard}>
      {openMessage && (
        <div className={styles.rejectMessege}>
          <p>Reject Client Success!</p>
          <img src={closeIcon} alt='close' />
        </div>
      )}
      <h1>Client List</h1>
      <div className={styles.buttonTable}>
        <button>
          <img src={sortIcon} />
          Sort
        </button>
        <button style={{ marginLeft: '0.75rem' }}>
          <img src={filterIcon} />
          Filter
        </button>
      </div>
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
          {loading
            ? 'wait a minute'
            : clients?.slice(firstIndex, lastIndex).map((item, index) => {
                return (
                  <tr key={index} id={item.appointment_id}>
                    <td>{item?.date_request}</td>
                    <td>{item?.child?.parent?.name}</td>
                    <td>{item?.child?.parent?.client_id}</td>
                    <td>{item?.child?.name}</td>
                    <td>
                      <button
                        className={
                          item?.appointment_status === 'Pending'
                            ? styles.pending
                            : item?.appointment_status === 'Accept'
                            ? styles.active
                            : styles.reject
                        }
                      >
                        {item?.appointment_status}
                      </button>
                    </td>
                    <td>
                      <div>
                        <Button
                          id='basic-button'
                          aria-controls='basic-menu'
                          aria-haspopup='true'
                          aria-expanded={open ? 'true' : undefined}
                          /*onClick={clients.appointment_status === 'Pending' ? handleClick : null}*/ onClick={
                            handleClick
                          }
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
                            onClick={() => handleModal(item.client_Id)}
                            disabled={item?.appointment_status === 'Accept' ? true : false}
                          >
                            <span>
                              <BsCheck2Circle
                                style={{ color: '#10B278', position: 'relative', top: '2px' }}
                              />
                            </span>{' '}
                            Accept Client
                          </MenuItem>
                          <MenuItem onClick={handleMessage}>
                            <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                              <BiXCircle />
                            </span>{' '}
                            Reject Client
                          </MenuItem>
                          <MenuItem onClick={handleClientDetail} id={item.appointment_id}>
                            <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                              <AiOutlineInfoCircle />
                            </span>{' '}
                            View Details
                          </MenuItem>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                );
              })}
        </table>
        <div className={styles.footer}>
          <p>Showing {showing >= 10 ? '10' : showing} of 10</p>
          <div>
            <button onClick={previousTable}>
              <img src={previousIcon} alt='' />
              Previous
            </button>
            <button onClick={nextTable} style={{ marginLeft: '1.5rem' }}>
              Next
              <img src={nextIcon} alt='' />
            </button>
          </div>
        </div>
        {openModal && (
          <div onClick={(e) => handleModalCLose(e)}>
            <Modal
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
