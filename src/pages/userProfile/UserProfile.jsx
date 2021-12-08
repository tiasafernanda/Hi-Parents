import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styles from './assets/UserProfile.module.scss';
import MenuItem from '@mui/material/MenuItem';

export default function UserProfile() {
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

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  console.log('preview', preview);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = () => {
      console.log('error on loading image');
    };
  };
  console.log('image', image);

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
              <TextField required id='outlined-required' label='Name' placeholder='Name' />
              <TextField required id='outlined-disabled' label='Email' placeholder='Email' />
              <div className={styles.photo}>
                <fieldset>
                  <legend className={styles.legend}>Photo</legend>
                  <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                  {preview ? <img src={preview} alt='preview' /> : null}
                </fieldset>
              </div>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id='outlined-disabled'
                label='Phone Number'
                type='number'
                placeholder='Phone Number'
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
