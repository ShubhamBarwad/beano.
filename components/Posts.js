import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { addAllPost, selectPost } from '@/public/src/features/postSlice';
import axios from 'axios';
import { useEffect } from 'react';

export default function posts() {
    const BEANO_ENDPOINT = "http://localhost:8080/api/v1/post";
    const dispatch = useDispatch();
    let count = 0;
    const posts = useSelector(selectPost);
    useEffect(() => {
      const fetchData = () =>{
        const response = axios.get(BEANO_ENDPOINT).then((response) => {
          if(response != null && count == 0){
            console.log(response)
            dispatch(addAllPost(response.data));
            count++;
          }
          
        });
      };
      fetchData();
    }, []);
    
  return (
    <div className='posts-div flex-col'>
        {posts.map((post)=>(
            <Post post={post} key={post.id} />
        ))} 
    </div>
  )
}
