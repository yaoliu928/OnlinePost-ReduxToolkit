import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/postsSlice';

const Post = ({ title, body, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  }

  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>{body}</p>
      <button
        onClick={handleDelete}
        className='delete-button'>Delete</button>
    </div>
  )
}

export default Post