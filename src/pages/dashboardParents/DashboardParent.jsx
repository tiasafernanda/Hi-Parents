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
// import { ParentAction } from '../../store/actions/parent';
// import { useParams } from 'react-router-dom';

export default function ProfileParent() {
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
  // const [gender, setGender] = React.useState('');
  // const [gender1, setGender1] = React.useState('');

  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };
  // const handleChange1 = (index, event) => {
  //   setGender1(event.target.value);
    // let setGender1 = [...form];
    // setGender1[index][e.target.name] = e.target.value;
    // setForm(setGender1);
  // };

  const [inputParent, setInputParent] = useState({
    name: '',
    phone_number: '',
    address: '',
    job: '',
    place_birth: '',
    date_birth: '',
    gender: '',
    photo: null,
  });
  console.log(inputParent);
  const changeInputParent = (e) => {
    setInputParent({
      ...inputParent,
      [e.target.name]: e.target.value,
    });
  };

  // const submitParent = () => {
  //   dispatch(ParentAction(inputParent));
  // };

  const [inputChild, setInputChild] = useState([
    {
      name: '',
      gender: '',
      place_birth: '',
      date_birth: '',
      photo: null,
    },
  ]);
  console.log('inputChild', inputChild);
  const changeInputChild = (index, e) => {
    let newInputChild = [...inputChild];
    newInputChild[index][e.target.name] = e.target.value;
    setInputChild(newInputChild);
  };

  const submitChild = () => {
    dispatch(ChildAction(inputChild));
  };
  const deleteInputChild = (index) => {
    let newInputChild = [...inputChild];
    newInputChild.splice(index, 1);
    setInputChild(newInputChild);
  };

  const [image, setImage] = useState();
  console.log(image);
  const [isUpload, setIsUpload] = useState(false);
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUpload(true);
        console.log(e);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const [previewChild, setPreviewChild] = useState([]);
  console.log('previewChild', previewChild);
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
    let formdata = new FormData();
    for (let i = 0; i < inputChild.length; i++) {
      formdata.append('name', inputChild[i].name);
      formdata.append('gender', inputChild[i].gender);
      formdata.append('place_birth', inputChild[i].place_birth);
      formdata.append('date_birth', inputChild[i].date_birth);
      formdata.append('photo', inputChild[i].photo);
    }

    dispatch(ChildAction(formdata));
  };

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
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Email'
                name='email'
                placeholder='Email'
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Phone Number'
                type='number'
                name='phone_number'
                placeholder='Phone Number'
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Address'
                type='text'
                name='address'
                placeholder='Address'
                onChange={(e) => changeInputParent(e)}
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
                            name='photo'
                            accept='image/*'
                            onChange={(e) => handleImageChange(e)}
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
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Place Birth'
                name='place_birth'
                placeholder='Place Birth'
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                required
                id='outlined-required'
                label='Date Birth'
                name='date_birth'
                placeholder='Date Birth'
                onChange={(e) => changeInputParent(e)}
              />
              <TextField
                select
                label='Gender'
                name='gender'
                value={inputParent.gender}
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
                  child_name: '',
                  gender: '',
                  photo: null,
                  birth_place: '',
                  birth_date: '',
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
            // onClick={submitParent}
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
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: '#10B278',
            }}
            onClick={submitChild}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
