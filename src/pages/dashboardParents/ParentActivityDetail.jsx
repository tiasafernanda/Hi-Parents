import React, { useEffect } from 'react';
import styles from './assets/ParentActivityDetail.module.scss';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDataChildAction } from '../../store/actions/getChild';
import { childActivityParentDetailAction } from '../../store/actions/childActivityParent';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};
export default function ParentActivityDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log('ID', id);
  useEffect(() => {
    dispatch(childActivityParentDetailAction(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getDataChildAction());
  }, [dispatch]);
  const childActivity = useSelector((state) => state.childActivityParent.details);
  const childDetail = useSelector((state) => state?.getDataChildAction?.profileChild);
  console.log('ChildActivityDetail', childActivity?.[id]);
  console.log('child detail', childDetail?.appointment);
  const item = childActivity?.find((items) => items.id === id);
  console.log('item', item);
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
              <input
                type='text'
                id='child'
                name='child'
                value={childActivity?.[id]?.appointment?.child?.name}
                readonly='readonly'
              />
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              <input
                type='text'
                id='gender'
                name='gender'
                value={childActivity?.[id]?.appointment?.child?.gender}
                readonly='readonly'
              />
            </fieldset>
            <br></br>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img
                  src={childActivity?.[id]?.appointment?.child?.photo}
                  alt=''
                  className='expandable-image'
                  onClick={handleOpen}
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
                value={childActivity?.[id]?.appointment?.child?.place_birth}
                readonly='readonly'
              />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthdate'
                name='birthdate'
                value={dayjs(childActivity?.[id]?.appointment?.child?.date_birth).format(
                  'DD MMMM YYYY'
                )}
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
                value={childActivity?.[id]?.activity_detail}
                readonly='readonly'
              />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img
                  src={childActivity?.[id]?.photo}
                  alt=''
                  className='expandable-image'
                  onClick={handleOpen1}
                />
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Time</legend>
              <input
                type='text'
                id='time'
                name='time'
                value={childActivity?.[id]?.time}
                readonly='readonly'
              />
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
              <img
                src={childActivity && childActivity[0]?.appointment?.child?.photo}
                alt=''
                onClick={handleOpen}
                style={{ borderRadius: '8px', width: '30rem' }}
              />
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
              <img
                src={childActivity?.[id]?.photo}
                alt=''
                onClick={handleOpen1}
                style={{ borderRadius: '8px', width: '30rem' }}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
