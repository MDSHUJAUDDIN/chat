import React from 'react';
import chatimg from '../img/3394897.jpg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Signin');
  };

  const LoginButtonClick = () => {
    navigate('/Home');
  };

  return (
    <div className='bg-slate-200 h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='bg-white p-8 flex flex-col h-[700px] w-[600px] justify-center space-y-4 items-center'>
          <h1 className='text-black text-3xl'>Login</h1>
          <div className='flex flex-col space-y-2 w-[70%]'>
            <label htmlFor='email'>Email</label>
            <input
              className='bg-slate-200 p-4 w-full outline-none rounded-md'
              type='email'
              placeholder='email@gmail.com'
              name='email'
              id='email'
            />
          </div>
          <div className='flex flex-col space-y-2 w-[70%]'>
            <label htmlFor='pwd'>Password</label>
            <input
              className='bg-slate-200 p-4 w-full outline-none rounded-md'
              type='password'
              placeholder='password'
              id='pwd'
              name='pwd'
            />
          </div>
          <button onClick={LoginButtonClick} className='bg-blue-500 text-white p-4 rounded-md w-[70%]'>
            Sign Up
          </button>
          <p>
            Dont have an account?{' '}
            <button onClick={handleButtonClick} className='text-blue-500 underline'>
              here
            </button>
          </p>
        </div>
        <div>
          <img
            className='h-[700px] w-[600px]'
            src={chatimg}
            alt='imagination'
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
