import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNannyProfileAction, updateNannyProfileAction } from '../../store/actions/nannies';
import styles from './assets/UserProfile.module.scss';
import MenuItem from '@mui/material/MenuItem';
import folder from './assets/img/folder_5.svg';

export default function UserProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNannyProfileAction());
  }, [dispatch]);
  const nannyProfile = useSelector((state) => state.nannies.profile);

  const [updateProfile, setUpdateProfile] = useState({
    name: nannyProfile?.userProfile?.name || '',
    phone_number: nannyProfile?.userProfile?.email || '',
    gender: nannyProfile?.userProfile?.gender || '',
    photo: null,
  });

  const changeInput = (e) => {
    setUpdateProfile({
      ...updateProfile,
      [e.target.name]: e.target.value,
    });
  };

  const submitNannyProfile = () => {
    let formDataNanny = new FormData();
    formDataNanny.append('name', updateProfile.name);
    formDataNanny.append('phone_number', updateProfile.phone_number);
    formDataNanny.append('gender', updateProfile.gender);
    formDataNanny.append('photo', updateProfile.photo);

    dispatch(updateNannyProfileAction(formDataNanny));
  };

  const [nannyImage, setNannyImage] = useState([]);

  function handleImageForm(e) {
    if (e.target.files && e.target.files[0]) {
      setUpdateProfile({ ...updateProfile, photo: e.target.files[0] });
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setNannyImage(reader.result);
      };
    }
  }

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

  return (
    <div className={styles.containers}>
      <h1 style={{ marginTop: '3rem', marginBottom: '1rem', marginLeft: '2rem' }}>User Profile</h1>
      <div className={styles.container}>
        <h3 style={{ marginBottom: '1rem' }}>User Information</h3>
        <hr style={{ width: 'fitcontent', marginBottom: '1rem' }} />

        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, margin: '10px', width: '40ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                required
                id='outlined-required'
                name='name'
                defaultValue={nannyProfile?.userProfile?.name || ''}
                onChange={(e) => changeInput(e)}
              />
              <TextField
                required
                id='outlined-disabled'
                name='email'
                value={nannyProfile?.userProfile?.email}
                disabled
              />
              <div className={styles.photo}>
                <fieldset>
                  <legend className={styles.legend}>Photo</legend>
                  <div className={styles.image}>
                    <div className={styles.imageUpload}>
                      {!updateProfile.photo ? (
                        <>
                          <label htmlFor='upload-input'>
                            <img
                              src={nannyProfile?.userProfile?.photo || folder}
                              draggable={'false'}
                              alt='placeholder'
                              style={
                                nannyProfile?.userProfile?.photo === null
                                  ? { width: '2rem' }
                                  : {
                                      height: '5rem',
                                      width: '5rem',
                                      objectFit: 'cover',
                                      borderRadius: '20px',
                                      position: 'relative',
                                      bottom: '1px',
                                      right: '1px',
                                    }
                              }
                            />
                          </label>
                          <input
                            id='upload-input'
                            name='photo'
                            type='file'
                            accept='image/*'
                            onChange={(e) => handleImageForm(e)}
                          />
                        </>
                      ) : (
                        <div className={styles.ImagePreview}>
                          <img
                            id={styles.uploadedImage}
                            src={nannyImage}
                            alt='uploaded-img'
                            onClick={() => {
                              setUpdateProfile(false);
                              setNannyImage(null);
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
                id='outlined-disabled'
                label='Phone Number'
                name='phone_number'
                type='tel'
                placeholder='081234xxxxx'
                defaultValue={nannyProfile?.userProfile?.phone_number}
                onChange={(e) => changeInput(e)}
              />
              <TextField
                select
                label='Gender'
                name='gender'
                defaultValue={nannyProfile?.userProfile?.gender}
                onChange={(e) => changeInput(e)}
                helperText='Please select your gender'
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={'' || option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
        </Box>
      </div>
      <div
        style={{
          marginTop: '2rem',
          marginLeft: '30rem',
          marginRight: '2rem',
          display: 'flex',
          justifyContent: 'right',
          height: '3rem',
        }}
      >
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#F67979',
            borderRadius: '2rem',
            color: 'white',
            borderStyle: 'none',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#10B278',
            borderRadius: '2rem',
            marginLeft: '1rem',
            color: 'white',
            borderStyle: 'none',
          }}
          onClick={submitNannyProfile}
        >
          Save
        </button>
      </div>
    </div>
  );
}
