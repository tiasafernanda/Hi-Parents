import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import styles from './assets/DashboardParent.module.scss';
import MenuItem from '@mui/material/MenuItem';
import folder from './assets/img/folder_5.svg';

export default function ProfileParent() {
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

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  // const [image, setImage] = useState();
  // const [preview, setPreview] = useState();
  // console.log('preview', preview);
  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setPreview(reader.result);
  //   };
  //   reader.onerror = () => {
  //     console.log('error on loading image');
  //   };
  // };
  // console.log('image', image);
  // const [image1, setImage1] = useState();
  // const [preview1, setPreview1] = useState();
  // console.log('preview', preview1);
  // const handleImage1 = (e) => {
  //   const file = e.target.files[0];
  //   setImage1(file);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setPreview1(reader.result);
  //   };
  //   reader.onerror = () => {
  //     console.log('error on loading image');
  //   };
  // };
  // console.log('image', image1);
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
  const [image1, setImage1] = useState();
  const [isUpload1, setIsUpload1] = useState(false);
  function handleImageChange1(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage1(e.target.result);
        setIsUpload1(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
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
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                sx={{ width: '100%' }}
                required
                id='outlined-required'
                label='Parent Name'
                placeholder='Parent Name'
              />
              <TextField required id='outlined-required' label='Email' placeholder='Email' />
              <TextField
                required
                id='outlined-required'
                label='Phone Number'
                type='number'
                placeholder='Phone Number'
              />
              <TextField
                required
                id='outlined-required'
                label='Address'
                type='text'
                placeholder='Address'
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField required id='outlined-required' label='Job' placeholder='Job' />
              <TextField
                required
                id='outlined-required'
                label='Place Birth'
                placeholder='Place Birth'
              />
              <TextField
                required
                id='outlined-required'
                label='Date Birth'
                placeholder='Date Birth'
              />
              <TextField
                select
                label='Gender'
                value={gender}
                onChange={handleChange}
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
          <h3
            style={{
              marginTop: '4rem',
              marginBottom: '1rem',
            }}
          >
            Children Information 1
          </h3>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id='outlined-required'
                label='Children Name'
                placeholder='Children Name'
              />
              <TextField
                select
                label='Gender'
                value={gender}
                onChange={handleChange}
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
                  {/* <input type='file' accept='image/*' onChange={(e) => handleImage1(e)} />
                  {preview1 ? <img src={preview1} alt='preview' /> : null} */}
                  <div className={styles.image}>
                    <div className={styles.imageUpload}>
                      {!isUpload1 ? (
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
                            onChange={handleImageChange1}
                          />
                        </>
                      ) : (
                        <div className={styles.ImagePreview}>
                          <img
                            id={styles.uploadedImage}
                            src={image1}
                            alt='uploaded-img'
                            onClick={() => {
                              setIsUpload1(false);
                              setImage1(null);
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
                id='outlined-required'
                label='Place Birth'
                placeholder='Place Birth'
              />
              <TextField
                required
                id='outlined-required'
                label='Date Birth'
                placeholder='Date Birth'
              />
            </Box>
          </div>
          <button
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
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
            Add Children
          </button>
        </Box>
      </div>
      <div className={styles.btn}>
        <div className={styles.submitbtn}>
          <button
            style={{
              backgroundColor: '#F1B722',
            }}
          >
            Submit
          </button>
        </div>
        <div className={styles.savebtn}>
          <button
            style={{
              backgroundColor: '#F67979',
              marginRight: '1rem',
            }}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: '#10B278',
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
