import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chatimg from '../img/3156814.jpg';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

function Signin() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      const file = e.target[3]?.files[0];
      let downloadURL = '';
      
      if (file) {
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (url) => {
            downloadURL = url;
          });
        });
      }

      // Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Create user on Firestore
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      // Create empty user chats on Firestore
      await setDoc(doc(db, 'userChats', res.user.uid), {});

      navigate('/');
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className='bg-slate-200 h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div>
          <img className='h-[700px] w-[600px]' src={chatimg} alt='imagination' />
        </div>
        <div className='bg-white p-8 flex flex-col h-[700px] w-[600px] justify-center space-y-4 items-center'>
          <h1 className='text-black text-3xl'>Sign In</h1>
          <form onSubmit={handleSubmit} className='w-[100%] flex flex-col items-center space-y-4'>
            <div className='flex flex-col space-y-2 w-[70%]'>
              <label htmlFor='username'>Username</label>
              <input
                required
                className='bg-slate-200 p-4 w-full outline-none rounded-md'
                type='text'
                placeholder='Username'
                id='username'
                name='username'
              />
            </div>
            <div className='flex flex-col space-y-2 w-[70%]'>
              <label htmlFor='email'>Email</label>
              <input
                required
                className='bg-slate-200 p-4 w-full outline-none rounded-md'
                type='email'
                placeholder='email@gmail.com'
                name='email'
                id='email'
              />
            </div>
            <div className='flex flex-col space-y-2 w-[70%]'>
              <label htmlFor='password'>Password</label>
              <input
                required
                className='bg-slate-200 p-4 w-full outline-none rounded-md'
                type='password'
                placeholder='password'
                id='password'
                name='password'
              />
            </div>
            <div className='flex flex-col space-y-2 w-[70%]'>
              <label htmlFor='file'>Profile Picture</label>
              <input
                className='bg-slate-200 p-4 w-full outline-none rounded-md'
                type='file'
                id='file'
                name='file'
              />
            </div>
            <button type='submit' className='bg-blue-500 text-white p-4 rounded-md w-[70%]'>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {err && <span className='text-red-500'>Something went wrong</span>}
          </form>
          <p>
            Already have an account?{' '}
            <button onClick={() => navigate('/')} className='text-blue-500 underline'>
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
