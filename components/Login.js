import { signIn } from 'next-auth/react';
import React from 'react';

export default function Login() {
  return (
    <div className='flex-col justify-content-center align-items'>
        <a onClick={signIn} className='custom-button'>Login</a>
    </div>
  )
}
