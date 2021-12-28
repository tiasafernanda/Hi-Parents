import React from 'react';
import styles from './assets/EditActivity.module.scss';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import folder from './assets/img/folder_5.svg';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { getChildActivities, updateChildActivities } from '../../store/actions/nannies';
import { getClientDetail } from '../../store/actions/clients';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};
export default function EditActivity() {
  const { appointment_id, id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChildActivities(appointment_id));
  }, [dispatch, appointment_id]);

  useEffect(() => {
    dispatch(getClientDetail(appointment_id));
  }, [dispatch, appointment_id]);
  const detailClient = useSelector((state) => state.clients.clientDetail.details);

  const [form, setForm] = useState([
    {
      activity_detail: '',
      photo: null,
      time: '',
    },
  ]);

  const editActivities = () => {
    let formActivity = new FormData();
    for (let i = 0; i < form.length; i++) {
      formActivity.append('id', id);
      formActivity.append('activity_detail', form[i].activity_detail);
      formActivity.append('photo', form[i].photo);
      formActivity.append('time', form[i].time);
    }
    dispatch(updateChildActivities(formActivity, id));
  };

  const changeForm = (index, e) => {
    let newForm = [...form];
    newForm[index][e.target.name] = e.target.value;
    setForm(newForm);
  };
  const deleteForm = (index) => {
    let newForm = [...form];
    newForm.splice(index, 1);
    setForm(newForm);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [previewImage, setPreviewImage] = useState([]);

  function handleImageForm(index, e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let activityForm = [...form];
      activityForm[index].photo = e.target.files[0];
      setForm(activityForm);
      reader.onload = function (e) {
        let newForm = [...previewImage];
        newForm[index] = e.target.result;
        setPreviewImage(newForm);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function deletePhoto(index) {
    let newForm = [...form];
    newForm[index].photo = '';
    setForm(newForm);
  }

  return (
    <div className={styles.containers}>
      <Link to='/dashboard/childactivity'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Edit Child Activity
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

            <div className={styles.childPhoto}>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <img
                  src={detailClient && detailClient[0]?.child?.photo}
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
          {form.map((item, index) => {
            return (
              <div key={index}>
                <h3>Child Activity</h3>
                <hr />
                <form className={styles.form2}>
                  <div className={styles.form1}>
                    <fieldset>
                      <legend className={styles.legend}>Activity</legend>
                      <input
                        type='text'
                        name='activity_detail'
                        value={item.activity_detail || ''}
                        onChange={(e) => changeForm(index, e)}
                      />
                    </fieldset>
                    <div>
                      <fieldset>
                        <legend className={styles.legend}>Photo</legend>
                        <div className={styles.image}>
                          <div className={styles.imageUpload}>
                            {!item.photo ? (
                              <>
                                <label htmlFor='upload-input'>
                                  <img
                                    src={folder}
                                    draggable={'false'}
                                    alt='placeholder'
                                    style={{ width: '2rem' }}
                                  />
                                </label>
                                <input
                                  id='upload-input'
                                  name='photo'
                                  type='file'
                                  accept='image/*'
                                  onChange={(e) => handleImageForm(index, e)}
                                />
                              </>
                            ) : (
                              <div className={styles.ImagePreview}>
                                <img
                                  id={styles.uploadedImage}
                                  src={previewImage[index]}
                                  alt='uploaded-img'
                                  onClick={() => {
                                    deletePhoto(index);
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className={styles.form2}>
                    <fieldset>
                      <legend className={styles.legend}>Time</legend>
                      <input
                        type='time'
                        name='time'
                        value={item.time || ''}
                        onChange={(e) => changeForm(index, e)}
                      />
                    </fieldset>
                    <button className={styles.deletebtn} onClick={() => deleteForm(index)}>
                      <AiOutlineDelete style={{ position: 'relative', top: '1px' }} />
                      {''} Delete Activity
                    </button>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <button
          onClick={() =>
            setForm([
              ...form,
              {
                activity: '',
                photo: null,
                time: '',
              },
            ])
          }
          className={styles.add}
        >
          <AiOutlinePlusCircle style={{ position: 'relative', color: '#10B278', top: '2px' }} />
          {''} Add Activity
        </button>
      </div>
      <div className={styles.modify}>
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
          Cancel
        </button>
        <button
          onClick={editActivities}
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#10B278',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
          }}
        >
          Save
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
                src={detailClient && detailClient[0]?.child?.photo}
                alt=''
                onClick={handleOpen}
                style={{ borderRadius: '8px', width: '30rem' }}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
