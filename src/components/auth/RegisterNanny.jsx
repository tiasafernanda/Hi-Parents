//import React from "react";
import SignUpNannyStyle from './signupnanny.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { Select } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterNanny() {
  const [role, setRole] = React.useState('');
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={SignUpNannyStyle.signupnannyContainer}>
      <div className={SignUpNannyStyle.signupnannyWrapper}>
        <div className={SignUpNannyStyle.signupnannyLogin}>
          <h1 className={SignUpNannyStyle.signupnannyHeader}>Sign Up</h1>
          <h5>to Hi-Parents to continue</h5>
          <div className={SignUpNannyStyle.signupnannyLoginForm}>
            <input
              className={SignUpNannyStyle.signupnannyInput}
              type='text'
              placeholder='Full Name'
              name='full name'
            />

            <input
              className={SignUpNannyStyle.signupnannyInput}
              type='text'
              placeholder='Email Addres'
              name='email'
            />

            <input
              className={SignUpNannyStyle.signupnannyInput}
              type={showPass === false ? 'text' : 'password'}
              placeholder='Password'
              name='password'
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

            <Box sx={{ minWidth: 382 }}>
              <InputLabel
                id='demo-simple-select-standard-label'
                sx={{ paddingLeft: '1rem', color: '#8E8E8A', fontWeight: '100' }}
              >
                Role
              </InputLabel>
              <FormControl variant='standard' fullWidth>
                <Select
                  value={role}
                  onChange={handleChange}
                  label='Select Role'
                  sx={{ paddingLeft: '1rem', color: '#8E8E8A' }}
                >
                  <MenuItem value={'Nanny'}>Nanny</MenuItem>
                  <MenuItem value={'Parent'}>Parent</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <button className={SignUpNannyStyle.signupnannyButton}>Sign Up</button>
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
