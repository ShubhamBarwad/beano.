import React from 'react';
import { useSession} from 'next-auth/react';


const showHideComments = (e) => {
  const commentDiv = e.target.parentElement.parentElement.parentElement.lastChild;
  console.log(e.target.parentElement.parentElement.parentElement.lastChild);
  commentDiv.classList.toggle('hidden');
}

export default function Post({ post }) {
  const { data: session} = useSession();

  return (
    <div className='post card flex-col' key={post.id}>
        <div className='flex-row align-items post-user-name'>
            <img src={post.profilePic} alt="profile-pic" className='profile-pic' />
            <p className='level-1-5-font-size'><strong className='dark-font'>{post.name}</strong></p>
        </div>
        <p className='level-1-5-font-size'>{post.post}</p>
        {post.image != 'null' && (
          <img className='post-img' src={post.image} alt="postImg" />
        )}
        <div>
          <p><strong className="level-2-font-size dark-font">2546 likes</strong></p>
        </div>
        <div className='flex-row align-items post-actions-div'>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font">favorite</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Like</p> */}
          </div>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font" onClick={showHideComments}>chat_bubble</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Comment</p> */}
          </div>
          <div className="flex-row align-items justify-content-center">
            <i className="material-symbols-rounded no-fill dark-font">send</i>
            {/* <p className="level-2-font-size light-font hide-on-mobile">Share</p> */}
          </div>
        </div>
        <div className='flex-row align-items comment-input-div'>
          <img src={session?.user.image} className='profile-pic comment-input' alt='user profile' />
          <input className='comment-input-box' type="text" name="comment-input-box" id="commentInputBox" placeholder='Add a comment...'/>
        </div>
        {/* <div className='all-comments anim-scroll hidden'>
          <Comment commentorProfile={props.profileImg} commentorName={'Harry Potter'} commentValue={'Wow! He looks just like you professor!'}/>
          <Comment commentorProfile={commentorProflie1} commentorName={'Gandalf the Grey'} commentValue={'YOU SHALL NOT PASS!'}/>
          <Comment commentorProfile={senderProfile} commentorName={'Albus Dumbledore'} commentValue={'Thats a bit harsh, the term hasnt even started yet'}/>
          <Comment commentorProfile={commentorProfile2} commentorName={'Ron Weasley'} commentValue={'Bloody Hell!!!!!!'}/>
        </div> */}
    </div>
  )
}
