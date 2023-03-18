import React from 'react';
import { signOut, useSession} from 'next-auth/react';

export default function Header() {
  const { data: session} = useSession();
  return (
    <div className='header flex-row align-items' id='header'>
        <h1 className='header-ls'>beano<span>.</span></h1>
        <h1 className='header-ss'>b<span>.</span></h1>
        <div className='menu flex-row align-items'>
            <span className="material-symbols-rounded">notifications</span>
            <span className="material-symbols-rounded">chat</span>
            <span className="material-symbols-rounded">help</span>
            <img onClick={signOut} src={session?.user.image} className='profile-pic comment-input' alt='user profile' />
        </div>
    </div>
  )
}
