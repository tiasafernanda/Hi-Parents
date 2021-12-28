import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import styles from './assets/ClientList.module.scss';
import { Button, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getClients, updateStatusAppointment } from '../../store/actions/clients';
import { getAppointment } from '../../store/actions/nannies';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import previousIcon from './assets/previousicon.svg';
import nextIcon from './assets/nexticon.svg';
import closeIcon from './assets/close.png';
import sortIcon from './assets/sortIcon.svg';
import filterIcon from './assets/filterIcon.svg';
import ReactLoading from 'react-loading';
import Empty from '../../components/empty/Empty';
import Pagination from '@mui/material/Pagination';

export default function ClientList() {
  const navigate = useNavigate();
  const { pages } = useParams();
  const dispatch = useDispatch();

  const { loading, clients } = useSelector((state) => state.clients);
  console.log('clients list', clients);

  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getClients(pages));
  }, [dispatch, pages]);

  //Dropdown Menu
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
    console.log(appointment_id, 'appointment_id');
    navigate(`/dashboard/clientdetail/${appointment_id}`);
  };
  const [selectedItem, setSelectedItem] = useState('');
  console.log(selectedItem, 'selectedItem');

  //Accept Client & Modal
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal, 'modal');

  // const [modalSelect, setModalSelect] = useState('');
  // const modalValue = clients.find((data) => data.client_Id === modalSelect);
  // console.log(modalSelect, 'modalSelect');
  // console.log(modalValue, 'modalValue');

  const handleModal = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  const handleModalCLose = (e) => {
    setOpenModal(false);
  };

  //Reject Client & Message
  const [statusReject, setStatusReject] = useState({
    appointment_id: null,
    appointment_status: '',
  });

  const [openMessage, setOpenMessage] = useState(false);

  const handleRejectClient = () => {
    setStatusReject((statusReject.appointment_id = selectedItem.appointment_id));
    setStatusReject((statusReject.appointment_status = 'Reject'));
    dispatch(updateStatusAppointment(statusReject));
  };

  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.textContent));
    setShowPage(true);
  };

  useEffect(() => {
    dispatch(getClients(page));
  }, [page]);

  return (
    <div className={styles.dashboard}>
      {/* {openMessage && (
        <div className={styles.rejectMessege}>
          <p>Reject Client Success!</p>
          <img src={closeIcon} alt='close' />
        </div>
      )} */}
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
          {loading ? (
            <ReactLoading type={'spin'} color={'#10B278'} height={200} width={200} />
          ) : (
            clients?.appointments?.map((item, index) => {
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
                      <Button id="basic-button" aria-controls="basic-menu" aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={(e) => handleClick(e, item)} sx={{ color: 'black' }}>
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
                        <MenuItem onClick={() => handleModal()} disabled={selectedItem.appointment_status === 'Pending' ? false : true}>
                          <span>
                            <BsCheck2Circle style={{ color: '#10B278', position: 'relative', top: '2px' }} />
                          </span>
                          Accept Client
                        </MenuItem>
                        <MenuItem onClick={handleRejectClient} disabled={selectedItem.appointment_status === 'Pending' ? false : true}>
                          <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
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
                          <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
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
        <div className={styles.paginationContainer}>
          <Pagination
            count={clients?.pages}
            variant="outlined"
            shape="rounded"
            onChange={handlePage}
            // hideNextButton
            // hidePrevButton
          />
        </div>
        {openModal && (
          <div onClick={(e) => handleModalCLose(e)}>
            <Modal clientId={selectedItem.child?.parent?.client_id} dateRequest={selectedItem.date_request} parentName={selectedItem.child?.parent?.name} idAppointment={selectedItem.appointment_id} />
          </div>
        )}
      </div>
    </div>
  );
}
