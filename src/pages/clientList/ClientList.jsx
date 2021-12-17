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
import previousIcon from './assets/svg/previousicon.svg';
import nextIcon from './assets/svg/nexticon.svg';

export default function ClientList() {
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClientDetail = () => {
    window.location.href = '/dashboard/clientdetail';
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          {/* {clientDetail.map((item) => (
            <tr className={styles.row}>
              <td>{item.dateRequest}</td>
              <td>{item.parentName}</td>
              <td>{item.clientId}</td>
              <td>{item.childrenName}</td>
              <td>
                <div className={styles.dropdown}>
                  <button className={item.status === 1 ? styles.statusActive : item.status === 2 ? styles.statusReject : styles.statusPending}>{item.status === 1 ? 'Active' : item.status === 2 ? 'Reject' : 'Pending'}</button>
                  {item.status === 0 && (
                    <div className={styles.dropdownContent}>
                      <button className={styles.accept} onClick={() => handleClick(item.clientId)}>
                        <span style={{ color: '#10B278', position: 'relative', top: '2px' }}>
                          <BsCheck2Circle />
                        </span>{' '}
                        Accept Client
                      </button>
                      <button>
                        <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                          <BiXCircle />
                        </span>{' '}
                        Reject Client
                      </button>
                      <Link to="#">
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
                <button className={styles.actionButton} onClick={(e) => handleClick(e)}>
                  &bull;&bull;&bull;
                </button>
              </td>
            </tr>
          ))} */}
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
                      <button className={item?.appointment_status === 'Pending' ? styles.pending : item?.appointment_status === 'Accept' ? styles.active : styles.reject}>{item?.appointment_status}</button>
                    </td>
                    <td>
                      <div>
                        <Button id="basic-button" aria-controls="basic-menu" aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={clients.appointment_status === 'Pending' ? handleClick : null} sx={{ color: 'black' }}>
                          &bull;&bull;&bull;
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          elevation={1}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <span onClick={() => handleModal(item.client_Id)}>
                              <BsCheck2Circle style={{ color: '#10B278', position: 'relative', top: '2px' }} />
                            </span>{' '}
                            Accept Client
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
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
              <img src={previousIcon} alt="" />
              Previous
            </button>
            <button onClick={nextTable} style={{ marginLeft: '1.5rem' }}>
              Next
              <img src={nextIcon} alt="" />
            </button>
          </div>
        </div>
        {openModal && (
          <div onClick={(e) => handleModalCLose(e)}>
            <Modal clientId={modalValue.child?.parent?.client_id} dateRequest={modalValue.date_request} parentName={modalValue.child?.parent?.name} />
          </div>
        )}
      </div>
    </div>
  );
}
