import React, { useRef, useState } from 'react';
import { useSession} from 'next-auth/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '@/public/src/features/postSlice';

export default function CreatePost(props) {
  const BEANO_ENDPOINT = "http://localhost:8080/api/v1/post";
  const {data:session} = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      }
    }
  }
  const removeImage = () => {
    setImageToPost(null);
  }
  const handleSubmit = (e) => {
    console.log('clicked');
    e.preventDefault();
    if(!inputRef.current.value) return;
    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);
    axios.post(BEANO_ENDPOINT, formData, {
      headers: {Accept: "application/json"},
    })
    .then((respose) => {
      inputRef.current.value = "";
      dispatch(addPost);
      console.log(respose);
      removeImage();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='create-post-div flex-col card'>
      <div className="new-post-div flex-row align-items justify-content-center">
      <img className='profile-pic' src={session?.user.image} alt="profilepic" />
      <form>
        <input type="text" ref={inputRef} name="createPost" id="createPost" placeholder="What's on your mind?" />
        {/* <button className="custome-button" hidden></button> */}
      </form>
      </div>
      <div className="break"></div>
      {imageToPost && (
        <div className='flex-row align-items justify-content-evenly'>
          <img src={imageToPost} alt="imageToPost" className='image-to-post' />
          <span onClick={removeImage} class="material-symbols-rounded">delete</span>
        </div>
      )}
      <div className="attachments flex-row align-items justify-content-between">
        <div onClick={handleClick}  className="attachment-div flex-row align-items justify-content-center">
          <i className="material-symbols-rounded no-fill">image</i>
          <p className='level-2-font-size hide-on-mobile'>Image</p>
          <input onChange={addImageToPost} type="file" ref={hiddenFileInput} hidden accept="image/*" />
        </div>
        <div className="attachment-div flex-row align-items justify-content-center">
          <i className="material-symbols-rounded no-fill">attach_file</i>
          <p className='level-2-font-size hide-on-mobile'>Attachment</p>
        </div>
        <div className="attachment-div flex-row align-items justify-content-center">
        <i className="material-symbols-rounded no-fill">mic</i>
        <p className='level-2-font-size hide-on-mobile'>Audio</p>
        </div>
        <button className='custom-button' onClick={handleSubmit}>Post</button>
      </div>

    </div>
  )
}
