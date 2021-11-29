import LoginNanny from './auth/LoginNanny';
import RegisterNanny from './auth/RegisterNanny';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function Auth() {
  const { type } = useParams();
  console.log(type);
  return (
    <div>
      {type === 'signin' ? (
        <LoginNanny />
      ) : type === 'signup' ? (
        <RegisterNanny />
      ) : (
        'Halaman tidak di temukan ini'
      )}
    </div>
  );
}
