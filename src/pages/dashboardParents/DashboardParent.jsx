import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import styles from './assets/DashboardParent.module.scss';
import MenuItem from '@mui/material/MenuItem';
import folder from './assets/img/folder_5.svg';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { ChildAction } from '../../store/actions/childParent';
import { ParentAction } from '../../store/actions/parent';
// import { Link, useParams } from "react-router-dom";
import { getDataParentAction } from '../../store/actions/getParent';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDataChildAction } from '../../store/actions/getChild';
// import { ParentActionSuccess } from "../../store/actions/parent";
import { ParentChildAction } from '../../store/actions/childParent';
import dayjs from 'dayjs';

export default function ProfileParent() {
  const { profile } = useSelector((state) => state.getParent);

  // const { appointment_id } = useParams();
  const dispatch = useDispatch();
  const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ];

  const [inputParent, setInputParent] = useState({
    name: profile?.data?.name,
    phone_number: '',
    address: '',
    job: '',
    place_birth: '',
    date_birth: '',
    gender: '',
    photo: null,
  });

  const changeInputParent = (e) => {
    setInputParent({
      ...inputParent,
      [e.target.name]: e.target.value,
    });
  };

  const submitParent = () => {
    let formdataParent = new FormData();
    formdataParent.append('name', inputParent.name);
    formdataParent.append('phone_number', inputParent.phone_number);
    formdataParent.append('address', inputParent.address);
    formdataParent.append('job', inputParent.job);
    formdataParent.append('place_birth', inputParent.place_birth);
    formdataParent.append('date_birth', inputParent.date_birth);
    formdataParent.append('gender', inputParent.gender);
    formdataParent.append('photo', inputParent.photo);

    let formdata = new FormData();
    for (let i = 0; i < inputChild.length; i++) {
      formdata.append('name', inputChild[i].name);
      formdata.append('gender', inputChild[i].gender);
      formdata.append('place_birth', inputChild[i].place_birth);
      formdata.append('date_birth', inputChild[i].date_birth);
      formdata.append('photo', inputChild[i].photo);
    }

    dispatch(ChildAction(formdata));

    dispatch(ParentAction(formdataParent));
  };

  const deleteSubmitParent = () => {
    let formdataParent = { ...new FormData() };
    new FormData();
    setInputParent(formdataParent);
  };

  const [inputChild, setInputChild] = useState([
    {
      name: '',
      gender: '',
      place_birth: '',
      date_birth: '',
      photo: null,
    },
  ]);

  const changeInputChild = (index, e) => {
    let newInputChild = [...inputChild];
    newInputChild[index][e.target.name] = e.target.value;
    setInputChild(newInputChild);
  };

  // const submitChild = () => {
  //   dispatch(ChildAction(inputChild));
  // };
  const deleteInputChild = (index) => {
    let newInputChild = [...inputChild];
    newInputChild.splice(index, 1);
    setInputChild(newInputChild);
  };

  const [, setImage] = useState();

  const [, setIsUpload] = useState(false);

  const [previewParent, setPreviewParent] = useState([]);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setInputParent({ ...inputParent, photo: e.target.files[0] });
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setPreviewParent(reader.result);
      };
    }
  }

  const [previewChild, setPreviewChild] = useState([]);

  function handleImageForm(index, e) {
    if (e.target.files && e.target.files[0]) {
      let newFoto = [...inputChild];
      newFoto[index].photo = e.target.files[0];
      setInputChild(newFoto);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      let newInputChild = [...previewChild];
      reader.onload = () => {
        newInputChild = [...newInputChild, reader.result];
        setPreviewChild(newInputChild);
      };
    }
  }

  function deletePhoto(index) {
    let newInputChild = [...inputChild];
    newInputChild[index].photo = '';
    setInputChild(newInputChild);
  }

  const submitData = () => {
    dispatch(ParentChildAction());
  };

  useEffect(() => {
    dispatch(getDataParentAction(), getDataChildAction());
  }, [dispatch]);

  return (
    <div className={styles.containers}>
      <h1 style={{ marginTop: '3rem', marginBottom: '1rem', marginLeft: '2rem' }}>User Profile</h1>
      <div className={styles.container}>
        <h3 style={{ marginBottom: '1rem' }}>Parent Information</h3>
        <hr style={{ width: 'fitcontent' }} />
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 2, width: '40ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '1rem',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                sx={{ width: '100%' }}
                required
                id='outlined-required'
                label='Parent Name'
                name='name'
                placeholder='Parent Name'
                // value={inputParent.name}
                defaultValue={profile?.data?.name || ''}
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                // label='Email'
                name='email'
                placeholder='Email'
                disabled
                value={profile?.data?.email}
              />
              <TextField
                required
                id='outlined-required'
                label='Phone Number'
                type='tel'
                name='phone_number'
                // placeholder='Phone Number'
                defaultValue={profile?.data?.phone_number || ''}
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Address'
                type='text'
                name='address'
                placeholder='Address'
                defaultValue={profile?.data?.address || ''}
                onChange={(e) => changeInputParent(e)}
              />
              <div className={styles.photo}>
                <fieldset>
                  <legend className={styles.legend}>Photo</legend>

                  <div className={styles.image}>
                    <div className={styles.imageUpload}>
                      {!inputParent.photo ? (
                        <>
                          <label htmlFor='upload-input-parent'>
                            <img
                              src={folder}
                              draggable={'false'}
                              alt='placeholder'
                              style={{ width: '2rem' }}
                            />
                          </label>
                          <input
                            id='upload-input-parent'
                            type='file'
                            name='photo'
                            accept='image/*'
                            onChange={(e) => handleImageChange(e)}
                          />
                        </>
                      ) : (
                        <div className={styles.ImagePreview}>
                          <img
                            id={styles.uploadedImage}
                            src={previewParent}
                            alt='uploaded-img'
                            onClick={() => {
                              setIsUpload(false);
                              setImage(null);
                            }}
                            // onChange={(e) => changeInputParent(e)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </fieldset>
              </div>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id='outlined-required'
                name='job'
                label='Job'
                placeholder='Job'
                defaultValue={profile?.data?.job || ''}
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                // type='date'
                id='outlined-required'
                label='Place Birth'
                name='place_birth'
                placeholder='Place Birth'
                defaultValue={profile?.data?.place_birth}
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Date Birth'
                name='date_birth'
                placeholder='Date Birth'
                defaultValue={
                  'DD/MM/YYYY' || dayjs(profile?.data?.date_birth).format('DD MMMM YYYY')
                }
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                select
                label='Gender'
                name='gender'
                defaultValue={profile?.data?.gender || ''}
                // onChange={handleChange}
                onChange={(e) => changeInputParent(e)}
                helperText='Please select your gender'
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
          <div>
            {inputChild.map((item, index) => {
              return (
                <div key={index}>
                  <h3
                    style={{
                      marginTop: '4rem',
                      marginBottom: '1rem',
                    }}
                  >
                    Children Information
                  </h3>
                  <hr />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      marginTop: '1rem',
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField
                        required
                        name='name'
                        // value={item.name || ""}
                        id='outlined-required'
                        label='Children Name'
                        placeholder='Children Name'
                        onChange={(e) => changeInputChild(index, e)}
                      />
                      <TextField
                        select
                        label='Gender'
                        name='gender'
                        value={inputChild[index].gender}
                        // onChange={(e) => handleChange1(index, e)}
                        onChange={(e) => changeInputChild(index, e)}
                        helperText='Please select your gender'
                      >
                        {genders.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <div className={styles.photo}>
                        <fieldset>
                          <legend className={styles.legend}>Photo</legend>
                          <div className={styles.image}>
                            <div className={styles.imageUpload}>
                              {!item.photo ? (
                                <>
                                  <label htmlFor='upload-input-child'>
                                    <img
                                      src={folder}
                                      draggable={'false'}
                                      alt='placeholder'
                                      style={{ width: '2rem' }}
                                    />
                                  </label>
                                  <input
                                    id='upload-input-child'
                                    name='photo'
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => handleImageForm(index, e)}
                                    // onChange={(e) =(index, e)}
                                  />
                                </>
                              ) : (
                                <div className={styles.ImagePreview}>
                                  <img
                                    id={styles.uploadedImage}
                                    src={previewChild[index]}
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
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField
                        required
                        name='place_birth'
                        value={item.place_birth || ''}
                        id='outlined-required'
                        label='Birth Place'
                        placeholder='Birth Place'
                        onChange={(e) => changeInputChild(index, e)}
                      />
                      <TextField
                        required
                        name='date_birth'
                        value={item.date_birth || ''}
                        id='outlined-required'
                        label='Birth Date'
                        placeholder='Birth Date'
                        onChange={(e) => changeInputChild(index, e)}
                      />
                      <button className={styles.deletebtn} onClick={() => deleteInputChild(index)}>
                        <AiOutlineDelete
                          style={{
                            position: 'relative',
                            top: '1px',
                            marginRight: '0.5rem',
                          }}
                        />
                        {''} Delete Children
                      </button>
                    </Box>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setInputChild([
                ...inputChild,
                {
                  name: '',
                  gender: '',
                  place_birth: '',
                  date_birth: '',
                  photo: null,
                },
              ]);
            }}
            style={{
              marginTop: '2rem',
              width: '10rem',
              height: ' 2.5rem',
              borderRadius: '2rem',
              color: 'green',
              border: '1px solid #10B278',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
            Add Children
          </button>
        </Box>
      </div>
      <div className={styles.btn}>
        <div className={styles.submitbtn}>
          {/* <Link to="/dashboard/nannydashboard"> */}
          <button
            style={{
              backgroundColor: '#F1B722',
            }}
            // onClick={submitChild}
            onClick={submitData}
          >
            Submit
          </button>
          {/* </Link> */}
        </div>
        <div className={styles.savebtn}>
          <button
            style={{
              backgroundColor: '#F67979',
              marginRight: '1rem',
            }}
            onClick={deleteSubmitParent}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: '#10B278',
            }}
            onClick={submitParent}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
