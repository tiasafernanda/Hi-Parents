import React from 'react';
import styles from './assets/ActivityDetail.module.scss';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { getChildActivities } from '../../store/actions/nannies';
import { getClientDetail } from '../../store/actions/clients';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};
export default function ActivityDetail() {
  const { appointment_id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChildActivities(appointment_id));
  }, [dispatch, appointment_id]);
  const activitiesDetail = useSelector((state) => state.nannies.childDetail.activities);

  useEffect(() => {
    dispatch(getClientDetail(appointment_id));
  }, [dispatch, appointment_id]);
  const detailClient = useSelector((state) => state.clients.clientDetail.details);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div className={styles.containers}>
      <Link to='/dashboard/childactivity'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Child Activity Detail
      </Link>
      {activitiesDetail?.finalData?.map((item, index) => {
        return (
          <div className={styles.container} key={index}>
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
                    value={item?.child?.name}
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
                <div className={styles.childPhoto}>
                  <fieldset>
                    <legend className={styles.legend}>Photo</legend>
                    <img
                      src={item?.child?.photo}
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
            <div>
              <div>
                <h3>Child Activity</h3>
                <hr />
                {item?.appointment_activities?.map((list) => {
                  return (
                    <div>
                      <form className={styles.form2}>
                        <div className={styles.form1}>
                          <fieldset>
                            <legend className={styles.legend}>Activity</legend>
                            <input
                              type='text'
                              name='activity_detail'
                              value={list?.activity_detail}
                              readonly='readonly'
                            />
                          </fieldset>
                          <div>
                            <fieldset>
                              <legend className={styles.legend}>Photo</legend>
                              <img
                                src={list?.photo}
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
                            <input type='time' name='time' value={list?.time} readonly='readonly' />
                          </fieldset>
                        </div>
                      </form>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
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
                src={detailClient && detailClient[0]?.child?.photo}
                alt=''
                onClick={handleOpen}
                style={{ borderRadius: '8px', width: '30rem' }}
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
                src={activitiesDetail?.finalData?.appointment_activities?.map().photo}
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
