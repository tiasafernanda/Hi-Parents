//import React from "react";
import SignUpNannyStyle from './signupnanny.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { Select } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterNannyAction } from "../../store/actions/auth";
import validator from "validator";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';

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

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please, insert with correct format email!");
    }
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
            {registerNanny.name.length < 5 && registerNanny.name.length > 0 ? (
              <span className={SignUpNannyStyle.signupNameError}>
                Your name has to be at least 5 characters!
              </span>
            ) : null}

            <input
              className={
                isEmail === true
                  ? SignUpNannyStyle.signupnannyInput
                  : SignUpNannyStyle.signupnannyInputError
              }
              type="email"
              placeholder="Email Addres"
              name="email"
              onChange={(e) => {
                validasiInputEmail(e.target.value);
                changeInput(e);
                validateEmail(e);
              }}
            />
            {validator.isEmail(emailError) !== true ? (
              <span className={SignUpNannyStyle.signupEmailError}>
                {emailError}
              </span>
            ) : null}

            <input
              className={
                isPassword === true
                  ? SignUpNannyStyle.signupnannyInput
                  : SignUpNannyStyle.signupInputPasswordError
              }
              type={showPass === false ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              onChange={(e) => {
                validasiInputPassword(e.target.value);
                changeInput(e);
              }}
            />

            {!showPass ? (
              <VisibilityIcon
                className={`${SignUpNannyStyle.signupnannyIcon} ${
                  isPassword !== true
                    ? SignUpNannyStyle.iconShowPasswordError
                    : null
                }`}
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <VisibilityOffIcon
                className={`${SignUpNannyStyle.signupnannyIcon} ${
                  isPassword !== true
                    ? SignUpNannyStyle.iconShowPasswordError
                    : null
                }`}
                onClick={() => setShowPass(!showPass)}
              />
            )}
            {registerNanny.password.length > 0 &&
            registerNanny.password.length < 10 ? (
              <span className={SignUpNannyStyle.signupPasswordError}>
                Please, fill at least 10 characters and max 20 characters,
                <br />1 uppercase, 1 lowercase, 1 number, and 1 symbol!
              </span>
            ) : null}

            <Box sx={{ minWidth: 382 }}>
              <FormControl fullWidth>
                <InputLabel
                  className={SignUpNannyStyle.nativeNanny}
                  variant="standard"
                  htmlFor="uncontrolled-native"
                >
                  Role
                </InputLabel>
                <NativeSelect
                  className={SignUpNannyStyle.nativeNanny}
                  defaultValue={"Select Role"}
                  inputProps={{
                    name: 'role',
                    id: 'uncontrolled-native',
                  }}
                  onChange={handleRole}
                >
                  <option value={""}></option>
                  <option value={"Nanny"}>Nanny</option>
                  <option value={"Parent"}>Parent</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <button
              disabled={
                !(
                  registerNanny.name &&
                  registerNanny.email &&
                  registerNanny.password &&
                  registerNanny.role
                ) &&
                registerNanny.name.length < 5 &&
                registerNanny.password.length < 10
              }
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
