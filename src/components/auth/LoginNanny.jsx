import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginNannyAction } from '../../store/actions/auth';
import SignInNannyStyle from './signinnanny.module.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function LoginNanny() {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const [inputLoginNanny, setInputLoginNanny] = useState({
    email: '',
    password: '',
  });

  console.log (inputLoginNanny)

  const changeInput = (e) => {
    setInputLoginNanny({
      ...inputLoginNanny,
      [e.target.name]: e.target.value,
    });
  };

  const submitLoginNanny = () => {
    
    dispatch(LoginNannyAction(inputLoginNanny));
  };
  return (
    <div className={SignInNannyStyle.signinnannyContainer}>
      <div className={SignInNannyStyle.signinnannyWrapper}>
        <div className={SignInNannyStyle.signinnannyLogin}>
          <h1 className={SignInNannyStyle.signinnannyHeader}>Sign In</h1>
          <h5>to Hi-Parents to continue</h5>
          <div className={SignInNannyStyle.signinnannyLoginForm}>
            <input
              className={SignInNannyStyle.signinnannyInput}
              type="text"
              placeholder="Email Addres"
              name="email"
              onChange={(e) => changeInput(e)}
            />

            <input
              className={SignInNannyStyle.signinnannyInput}
              type={showPass === false ? 'text' : 'password'}
              placeholder='Enter your password'
              name='password'
              onChange={(e) => changeInput(e)}
            />

            {showPass ? (
              <VisibilityIcon
                className={SignInNannyStyle.signinnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <VisibilityOffIcon
                className={SignInNannyStyle.signinnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            )}

            <button className={SignInNannyStyle.signinnannyButton} onClick={submitLoginNanny}>
              Login to Continue
            </button>

            <div className={SignInNannyStyle.signinnannySignup}>
              <p>Don’t have an account ?</p>
              <Link to='/auth/signup'>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
