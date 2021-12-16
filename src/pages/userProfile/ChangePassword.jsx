import React from 'react';
import style from './assets/ChangePassword.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangePasswordAction } from '../../store/actions/changePassword';

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [inputChangePassword, setInputChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
  });

  console.log(inputChangePassword);

  const changeInput = (e) => {
    setInputChangePassword({
      ...inputChangePassword,
      [e.target.name]: e.target.value,
    });
  };

  const submitChangePassword = () => {
    dispatch(ChangePasswordAction(inputChangePassword));
  };
  return (
    <div className={style.container}>
      <h1>Change Password</h1>
      <div className={style.password}>
        <form>
          <input
            type='password'
            label='Old Password'
            name='oldPassword'
            placeholder='Old Password'
            id='outlined-required'
            onChange={(e) => changeInput(e)}
          />
          <input
            type='password'
            name='newPassword'
            placeholder='New Password'
            onChange={(e) => changeInput(e)}
          />
          <input
            type='password'
            name='Old Password'
            placeholder='Confirm Password'
            // onChange={(e) => changeInput(e)}
          />
        </form>
      </div>
      <div className={style.saveButton}>
        <button
          style={{
            width: '10rem',
            height: '2rem',
            marginLeft: '1rem',
            backgroundColor: '#F67979',
            borderRadius: '2rem',
            border: 'none',
            color: '#FFFFFF',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            width: '10rem',
            height: '2rem',
            marginLeft: '1rem',
            backgroundColor: '#10B278',
            borderRadius: '2rem',
            border: 'none',
            color: '#FFFFFF',
          }}
          onClick={submitChangePassword}
          type='submit'
        >
          Save
        </button>
      </div>
    </div>
  );
}
