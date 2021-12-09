import React from 'react';
import styles from './assets/ParentActivityDetail.module.scss';
import client from './assets/img/clientdetail.jpg';
import child from './assets/img/child.png';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};
export default function ParentActivityDetail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div className={styles.containers}>
      <Link to='/dashboard/activityparent'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Child Activity Detail
      </Link>
      <div className={styles.container}>
        <h3>Child Information</h3>
        <hr />
        <form className={styles.form1}>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input type='text' id='child' name='child' value='Vegeta Super' readonly='readonly' />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              {/* <select name='gender'>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select> */}
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </fieldset>
            <br></br>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img src={client} alt='' className='expandable-image' onClick={handleOpen} />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input type='text' id='birth' name='birth' value='Surabaya' readonly='readonly' />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthdate'
                name='birthdate'
                value='16 November 1992'
                readonly='readonly'
              />
            </fieldset>
          </div>
        </form>
        <h3>Child Activity</h3>
        <hr />
        <form className={styles.form2}>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Activity</legend>
              <input
                type='text'
                id='activity'
                name='activity'
                value='Play Bubble'
                readonly='readonly'
              />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img src={child} alt='' className='expandable-image' onClick={handleOpen1} />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Time</legend>
              <input type='text' id='time' name='time' value='15.00' readonly='readonly' />
            </fieldset>
          </div>
        </form>
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
              <img src={client} alt='' onClick={handleOpen} style={{ borderRadius: '8px' }} />
            </Box>
          </Fade>
        </Modal>
      </div>
      <div className={styles.modal}>
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
              <img src={child} alt='' onClick={handleOpen1} style={{ borderRadius: '8px' }} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
