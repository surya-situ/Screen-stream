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
        <div className='text-gray-200 flex justify-center font-semibold mb-8'>
          <h1 className='text-4xl font-bold'>Sign Up</h1>
        </div>


        <div className='flex'>

          {/* user input form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-64'>
            <label className='text-white' htmlFor='name'>Full name</label>
            <input
              type='text'
              className='p-2 border border-gray-300 rounded-md outline-none'
              placeholder='John Doe'
              name='name'
              value={inputs.name}
              onChange={handleChange}
            />

            <label className='text-white' htmlFor='name'>Email</label>
            <input
              type='email'
              className='p-2 border border-gray-300 rounded-md outline-none'
              placeholder='example@gmail.com'
              name='email'
              value={inputs.email}
              onChange={handleChange}
            />

            <label className='text-white' htmlFor='name'>Password</label>
            <input
              className='p-2 border border-gray-300 rounded-md outline-none'
              placeholder='Enter password'
              type='password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
            />

            {/* button */}
            <button type='submit' className='mt-4 p-2 text-white bg-blue-500 rounded-md outline-none hover:bg-blue-600'>
                <Link to="/">
                  Submit
                </Link>
            </button>

          </form>

          {/* or style design */}
          <div className='text-white flex items-center mx-14'>
              <div className='border-l border-white h-full'></div>
              <span className='mx-4'>or</span>
              <div className='border-r border-white h-full'></div>
          </div>



          <div className='flex flex-col justify-between py-12 px-6'>
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

            {/* log in */}
            <div className='text-white'>
              <p>already a member ? <span className='cursor-pointer underline pl-2'>login</span> </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UserPage;
