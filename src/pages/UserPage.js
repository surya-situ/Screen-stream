import React, { useState } from 'react';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({ name: '', email: '', password: '' });
  };

  return (
    <div className='h-screen ml-[150px] flex justify-center items-center'>
      <div className='space-y-4 bg-gray-800 p-10 rounded-md text-black'>

        {/* heading */}
        <div className='text-gray-200 flex justify-center font-semibold'>
          <h1>New to screen-stream</h1>
        </div>

        {/* user input form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <input
            className='p-4 border border-gray-300 rounded-md outline-none'
            placeholder='Enter name'
            name='name'
            value={inputs.name}
            onChange={handleChange}
          />
          <input
            className='p-4 border border-gray-300 rounded-md outline-none'
            placeholder='Enter email'
            name='email'
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            className='p-4 border border-gray-300 rounded-md outline-none'
            placeholder='Enter password'
            type='password'
            name='password'
            value={inputs.password}
            onChange={handleChange}
          />

          
            <button type='submit' className='p-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md outline-none'>
              <Link to="/">
                Submit
              </Link>
            </button>
        </form>

        {/* or style design */}
        <div className='text-white flex items-center'>
            <div className='flex-1 border-b border-white'></div>
            <span className='mx-4'>or</span>
            <div className='flex-1 border-b border-white'></div>
        </div>


        {/* other sign up options */}
        <div className='flex flex-col gap-2'>
          <button className='bg-blue-500 py-2 px-3 rounded-lg text-white flex justify-between cursor-pointer hover:bg-blue-600'>
            <span>Sign up with Facebook</span>
            <FacebookIcon />
          </button>

          <button className='bg-red-500 py-2 px-3 rounded-lg text-white  flex justify-between cursor-pointer hover:bg-red-600'>
            <span>Sign up with email</span>
            <EmailIcon />
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserPage;
