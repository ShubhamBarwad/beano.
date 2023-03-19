import React from 'react';
import CreatePost from './CreatePost';
import Posts from './Posts';

export default function Feed() {
  return (
    <div className="central-column flex-col">
        <CreatePost/>
        <Posts/>
        <h1 className='caught-up light-font'>You are all caught up!</h1>
    </div>
  )
}
