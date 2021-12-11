import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import styles from './assets/DashboardParent.module.scss';
import MenuItem from '@mui/material/MenuItem';
import folder from './assets/img/folder_5.svg';
import { AiOutlineDelete } from 'react-icons/ai';

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
  const [gender, setGender] = React.useState('');
  const [gender1, setGender1] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleChange1 = (index, event) => {
    setGender1(event.target.value);
    // let setGender1 = [...form];
    // setGender1[index][e.target.name] = e.target.value;
    // setForm(setGender1);
  };

  const [form, setForm] = useState([
    {
      child_name: '',
      gender: '',
      photo: null,
      birth_place: '',
      birth_date: '',
    },
  ]);
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
          <div>
            {form.map((item, index) => {
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
                    style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField
                        required
                        name='child_name'
                        value={item.child_name || ''}
                        id='outlined-required'
                        label='Children Name'
                        placeholder='Children Name'
                        onChange={(e) => changeForm(index, e)}
                      />
                      <TextField
                        select
                        label='Gender'
                        name='gender'
                        value={gender1}
                        onChange={(e) => handleChange1(index, e)}
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
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField
                        required
                        name='birth_place'
                        value={item.birth_place || ''}
                        id='outlined-required'
                        label='Birth Place'
                        placeholder='Birth Place'
                        onChange={(e) => changeForm(index, e)}
                      />
                      <TextField
                        required
                        name='birth_date'
                        value={item.birth_date || ''}
                        id='outlined-required'
                        label='Birth Date'
                        placeholder='Birth Date'
                        onChange={(e) => changeForm(index, e)}
                      />
                      <button className={styles.deletebtn} onClick={() => deleteForm(index)}>
                        <AiOutlineDelete
                          style={{ position: 'relative', top: '1px', marginRight: '0.5rem' }}
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
            onClick={() =>
              setForm([
                ...form,
                {
                  child_name: '',
                  gender: '',
                  photo: null,
                  birth_place: '',
                  birth_date: '',
                },
              ])
            }
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
