import React from 'react'
// import profile from './resources/harry_potter_profile.jpg'

export default function comment(props) {
  return (
    <div className='comment-div'>
        <div className='flex-row align-items-top'>
            <div>
                <img src={props.commentorProfile} className='profile-pic comment-input' alt='user profile' />
            </div>
            <div>
                <p><strong className='level-1-5-font-size dark-font'>{props.commentorName}</strong></p>
                <p className="level-1-2-font-size dark-font">{props.commentValue}</p>
                <i className="material-symbols-rounded no-fill dark-font">favorite</i>
                <i className="material-symbols-rounded no-fill dark-font">chat_bubble</i>
            </div>
        </div>
    </div>
  )
}
