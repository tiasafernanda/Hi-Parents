import LoginNanny from './auth/LoginNanny';
import RegisterNanny from './auth/RegisterNanny';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function Auth() {
  const { type } = useParams();
  
  return (
    <div>
      {type === 'signin' ? (
        <LoginNanny />
      ) : type === 'signup' ? (
        <RegisterNanny />
      ) : (
        'opss anda salah link'
      )}
    </div>
  );
}
