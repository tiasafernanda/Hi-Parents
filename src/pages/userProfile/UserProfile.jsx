import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getNannyProfileAction,
  // updateNannyProfileAction
} from '../../store/actions/nannies';
import styles from './assets/UserProfile.module.scss';
import MenuItem from '@mui/material/MenuItem';
import folder from './assets/img/folder_5.svg';

export default function UserProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNannyProfileAction());
  }, [dispatch]);
  const nannyProfile = useSelector((state) => state.nannies.profile);
  console.log('profile', nannyProfile);
  // const newProfile = useSelector((state) => state.nannies.profile);
  // console.log('profile', nannyProfile);

  const [updateProfile, setUpdateProfile] = useState({
    name: '',
    phone_number: '',
    gender: '',
    photo: null,
  });

  console.log(updateProfile);

  const changeInput = (e, index) => {
    setUpdateProfile({
      ...updateProfile,
      [e.target.name]: e.target.value,
    });
    // let newForm = [updateProfile];
    // newForm[index][e.target.name] = e.target.value;
    // setUpdateProfile(newForm);
  };

  // const submitUpdateProfile = () => {
  //   dispatch(updateNannyProfileAction(updateProfile));
  // };

  const [image, setImage] = useState();
  console.log(image);
  const [isUpload, setIsUpload] = useState(false);

  function handleImageForm(e, index) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        let newForm = [updateProfile];
        newForm[index].photo = e.target.result;
        setUpdateProfile(newForm);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // function deletePhoto(index) {
  //   let newForm = [updateProfile];
  //   newForm[index].photo = '';
  //   setUpdateProfile(newForm);
  // }

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
  const [gender, setGender] = React.useState();

  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };

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
                value={nannyProfile?.userProfile?.name || ''}
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
                  {/* <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                  {preview ? <img src={preview} alt='preview' /> : null} */}
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
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id='outlined-disabled'
                label='Phone Number'
                name='phone_number'
                type='tel'
                placeholder='081234xxxxx'
                value={nannyProfile?.userProfile?.phone_number}
                onChange={(e) => changeInput(e)}
              />
              <TextField
                select
                label='Gender'
                name='gender'
                value={gender}
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
        >
          Save
        </button>
      </div>
    </div>
  );
}
