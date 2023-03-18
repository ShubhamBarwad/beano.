import { signIn } from 'next-auth/react';
import React from 'react';

export default function Login() {
  return (
    <div className='login card flex-col align-items'>
      <h1 className='heading'>beano<span>.</span></h1>
        <a onClick={signIn} className='custom-button'>Login</a>
    </div>
  )
}
