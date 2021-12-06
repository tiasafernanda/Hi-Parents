//import React from "react";
import SignUpNannyStyle from './signupnanny.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { Select } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterNannyAction } from '../../store/actions/auth';

export default function RegisterNanny() {
  // const [role, setRole] = React.useState('');
  // const handleChange = (event) => {
  // setRole(event.target.value);
  // };
  const [showPass, setShowPass] = useState(false);
  // const [showCPass, setShowCPass] = useState(false);

  const dispatch = useDispatch();
  const [isRole, setIsRole] = useState('');
  const [registerNanny, setRegisterNanny] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  console.log(isRole);
  const changeInput = (e) => {
    setRegisterNanny({ ...registerNanny, [e.target.name]: e.target.value });
  };

  const submitRegisterNanny = (e) => {
    e.preventDefault();
    dispatch(RegisterNannyAction(registerNanny));
  };
  console.log('registerNanny', registerNanny);

  // const [fullName, setFullName] = useState('');
  const [isFullName, setIsFullName] = useState(true);

  // const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  // const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  const validasiInputFullName = (data) => {
    console.log(isFullName);
    if (data === '') {
      setIsFullName(false);
    } else {
      setIsFullName(true);
    }
  };

  const validasiInputEmail = (data) => {
    console.log(isEmail);
    if (data === '') {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const validasiInputPassword = (data) => {
    console.log(isPassword);
    if (data === '') {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handleRole = (e) => {
    e.preventDefault();
    setIsRole(e.target.value);
    changeInput(e);
  };

  return (
    <div className={SignUpNannyStyle.signupnannyContainer}>
      <div className={SignUpNannyStyle.signupnannyWrapper}>
        <div className={SignUpNannyStyle.signupnannyLogin}>
          <h1 className={SignUpNannyStyle.signupnannyHeader}>Sign Up</h1>
          <h5>to Hi-Parents to continue</h5>
          <div className={SignUpNannyStyle.signupnannyLoginForm}>
            <input
              className={
                isFullName === true
                  ? SignUpNannyStyle.signupnannyInput
                  : SignUpNannyStyle.signupnannyInputError
              }
              type='text'
              placeholder='Full Name'
              name='name'
              onChange={(e) => {
                validasiInputFullName(e.target.value);
                changeInput(e);
              }}
            />
            {isFullName !== true ? (
              <span className={SignUpNannyStyle.signupnannyInputError}>This field is required</span>
            ) : null}

            <input
              className={
                isEmail === true
                  ? SignUpNannyStyle.signupnannyInput
                  : SignUpNannyStyle.signupnannyInputError
              }
              type='text'
              placeholder='Email Addres'
              name='email'
              onChange={(e) => {
                validasiInputEmail(e.target.value);
                changeInput(e);
              }}
            />
            {isEmail !== true ? (
              <span className={SignUpNannyStyle.signupnannyInputError}>Email is invalid</span>
            ) : null}

            <input
              className={
                isPassword === true
                  ? SignUpNannyStyle.signupnannyInput
                  : SignUpNannyStyle.signupnannyInputError
              }
              type={showPass === false ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              onChange={(e) => {
                validasiInputPassword(e.target.value);
                changeInput(e);
              }}
            />

            {showPass ? (
              <VisibilityIcon
                className={SignUpNannyStyle.signupnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <VisibilityOffIcon
                className={SignUpNannyStyle.signupnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            )}
            {isPassword !== true ? (
              <span className={SignUpNannyStyle.signupSpanError}>
                Password must be at least 6 characters
              </span>
            ) : null}

            <Box sx={{ minWidth: 382 }}>
              <FormControl fullWidth>
                <InputLabel variant='standard' htmlFor='uncontrolled-native'></InputLabel>
                <NativeSelect
                  defaultValue={'Select Role'}
                  inputProps={{
                    name: 'role',
                    id: 'uncontrolled-native',
                  }}
                  onChange={handleRole}
                >
                  <option value={''}>Select Role</option>
                  <option value={'Nanny'}>Nanny</option>
                  <option value={'Parent'}>Parent</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <button
              onClick={(e) => submitRegisterNanny(e)}
              type='submit'
              className={SignUpNannyStyle.signupnannyButton}
            >
              Sign Up
            </button>
            <div className={SignUpNannyStyle.signupnannySignin}>
              <p>Already have an account ?</p>
              <Link to='/auth/signin'>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
