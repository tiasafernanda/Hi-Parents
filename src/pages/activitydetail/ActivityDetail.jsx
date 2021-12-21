import React from 'react';
import styles from './assets/ActivityDetail.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import folder from './assets/img/folder_5.svg';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { getChildActivities, postChildActivities } from '../../store/actions/nannies';

export default function ActivityDetail() {
  const { appointment_id } = useParams;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChildActivities(appointment_id));
  }, [dispatch, appointment_id]);
  const activitiesDetail = useSelector((state) => state.nannies.childDetail.activities);
  console.log('details', activitiesDetail && activitiesDetail[0]);
  const [form, setForm] = useState([
    {
      activity: '',
      photo: null,
      time: '',
    },
  ]);
  // const [inputActivities, setInputActivities] = useState({
  //   activity: '',
  //   photo: null,
  //   time: '',
  // });
  // console.log(inputActivities);

  const submitActivities = () => {
    dispatch(postChildActivities(form));
  };
  console.log('form', form);

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
  const [image, setImage] = useState();
  const [isUpload, setIsUpload] = useState(false);
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUpload(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function handleImageForm(index, e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        let newForm = [...form];
        newForm[index].photo = e.target.result;
        setForm(newForm);
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
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </fieldset>

            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <div className={styles.image}>
                  <div className={styles.imageUpload}>
                    {!isUpload ? (
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
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange}
                        />
                      </>
                    ) : (
                      <div className={styles.ImagePreview}>
                        <img
                          id={styles.uploadedImage}
                          src={image}
                          alt='uploaded-img'
                          onClick={() => {
                            setIsUpload(false);
                            setImage(null);
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
                        name='activity'
                        value={item.activity || ''}
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
                                  src={item.photo}
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
          onClick={submitActivities}
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
    </div>
  );
}
