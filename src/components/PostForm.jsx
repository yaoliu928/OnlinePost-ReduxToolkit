import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postsSlice';

const PostForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body }))
  }

  return (
    <form className='post-form' onSubmit={handleOnSubmit}>
      <h2>Add Post</h2>
      <label htmlFor='title'>Title:</label>
      <input
        type={'text'}
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <label htmlFor='body'>Body:</label>
      <textarea
        id='body'
        value={body}
        onChange={e => setBody(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default PostForm