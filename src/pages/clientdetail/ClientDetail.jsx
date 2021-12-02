import * as React from 'react';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import styles from './assets/ClientDetail.module.scss';
import client from './assets/img/clientphoto.jpg';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};

export default function ClientDetail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className={styles.containers}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <Link to='/nanny'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Client Detail
      </Link>

      <div className={styles.success}>
        <p>Accept Client Success!</p>
        <button>
          <b> X</b>
        </button>
      </div>

      <div className={styles.container}>
        <h3>Parent Information</h3>
        <hr />

        <form>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input
                type='text'
                id='parent'
                name='parent'
                value='Vegeta Super'
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Email</legend>
              <input
                type='text'
                id='email'
                name='email'
                value='vegeta@goku.com'
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Phone Number</legend>
              <input type='number' id='phone' name='phone' value='0823102492' readonly='readonly' />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Address</legend>
              <input
                type='text'
                id='address'
                name='address'
                value='Jl. Namek'
                readonly='readonly'
              />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img src={client} alt='' className='expandable-image' onClick={handleOpen} />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Job</legend>
              <input type='text' id='job' name='job' value='Warrior of Light' readonly='readonly' />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input type='text' id='birth' name='birth' value='Surabaya' readonly='readonly' />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthplace'
                name='birthplace'
                value='16 November 1992'
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Gender</legend>
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </fieldset>
          </div>
        </form>
        <h3>Children Information 1</h3>
        <hr />

        <form>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input type='text' id='child' name='child' value='Vegeta Super' readonly='readonly' />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </fieldset>
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
      </div>
      <div className={styles.btn}>
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
              <img src={client} alt='' onClick={handleOpen} style={{ borderRadius: '8px' }} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
