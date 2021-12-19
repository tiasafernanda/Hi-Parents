import * as React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import styles from './assets/ClientDetail.module.scss';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import { getClientDetail } from '../../store/actions/clients';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};

export default function ClientDetail() {
  const { appointment_id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientDetail(appointment_id));
  }, [dispatch, appointment_id]);
  const detailClient = useSelector((state) => state.clients.clientDetail.details);
  console.log('details', detailClient && detailClient[0]);
  // console.log('parent name', details?.details?.child?.parent?.name);

  const showAlert = () => {
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'bottom',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer);
    //     toast.addEventListener('mouseleave', Swal.resumeTimer);
    //   },
    // });

    // Toast.fire({
    //   icon: 'success',
    //   title: 'Accept Client Success!',
    // });
    Swal.fire('Accept Client Success!', '', 'success');
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  // function BackButton() {
  //   let history = useNavigate();

  //   function handleBack() {
  //     history.goBack();
  //   }
  // }

  const navigate = useNavigate();

  return (
    <div
      className={styles.containers}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      {/* <Link to='/dashboard/nannydashboard'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Client Detail
      </Link> */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Client Detail
      </button>
      <div className={styles.container}>
        <h3>Parent Information</h3>
        <hr />
        <form>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Parent Name</legend>
              <input
                type='text'
                id='parent'
                name='parent'
                value={detailClient && detailClient[0]?.child?.parent?.name}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Email</legend>
              <input
                type='text'
                id='email'
                name='email'
                value={detailClient && detailClient[0]?.child?.parent?.email}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Phone Number</legend>
              <input
                type='number'
                id='phone'
                name='phone'
                value={detailClient && detailClient[0]?.child?.parent?.phone_number}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Address</legend>
              <input
                type='text'
                id='address'
                name='address'
                value={detailClient && detailClient[0]?.child?.parent?.address}
                readonly='readonly'
              />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img
                  src={detailClient && detailClient[0]?.child?.parent?.photo}
                  alt=''
                  className='expandable-image'
                  onClick={handleOpen}
                />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Job</legend>
              <input
                type='text'
                id='job'
                name='job'
                value={detailClient && detailClient[0]?.child?.parent?.job}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input
                type='text'
                id='birth'
                name='birth'
                value={detailClient && detailClient[0]?.child?.parent?.place_birth}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthdate'
                name='birthdate'
                value={dayjs(detailClient && detailClient[0]?.child?.parent?.date_birth).format(
                  'DD MMMM YYYY'
                )}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Gender</legend>
              <input
                type='text'
                id='gender'
                name='gender'
                value={detailClient && detailClient[0]?.child?.parent?.gender}
                readonly='readonly'
              />
            </fieldset>
          </div>
        </form>
        <h3>Children Information 1</h3>
        <hr />

        <form>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input
                type='text'
                id='child'
                name='child'
                value={detailClient && detailClient[0]?.child?.name}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              <input
                type='text'
                id='gender'
                name='gender'
                value={detailClient && detailClient[0]?.child?.gender}
                readonly='readonly'
              />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img
                  src={detailClient && detailClient[0]?.child?.photo}
                  alt=''
                  className='expandable-image'
                  onClick={handleOpen1}
                />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input
                type='text'
                id='birth'
                name='birth'
                value={detailClient && detailClient[0]?.child?.place_birth}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthdate'
                name='birthdate'
                value={dayjs(detailClient && detailClient[0]?.child?.date_birth).format(
                  'DD MMMM YYYY'
                )}
                readonly='readonly'
              />
            </fieldset>
          </div>
        </form>
      </div>
      <div
        className={
          detailClient && detailClient[0]?.appointment_status === 'Accept'
            ? styles.accepted
            : styles.btn
        }
      >
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#F67979',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
            marginRight: '1rem',
          }}
        >
          Reject
        </button>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#10B278',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
          }}
          onClick={showAlert}
        >
          Accept
        </button>
      </div>
      <div className={styles.modal}>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <img
                src={detailClient && detailClient[0]?.child?.parent?.photo}
                alt=''
                onClick={handleOpen}
                style={{ borderRadius: '8px', width: '20rem' }}
              />
            </Box>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open1}
          onClose={handleClose1}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open1}>
            <Box sx={style}>
              <img
                src={detailClient && detailClient[0]?.child?.photo}
                alt=''
                onClick={handleOpen1}
                style={{ borderRadius: '8px', width: '20rem' }}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
