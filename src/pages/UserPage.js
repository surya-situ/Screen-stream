import React, { useState } from 'react';

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
      <div className='space-y-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <input
            className='p-2 border border-gray-300 rounded-md outline-none'
            placeholder='Enter name'
            name='name'
            value={inputs.name}
            onChange={handleChange}
          />
          <input
            className='p-2 border border-gray-300 rounded-md outline-none'
            placeholder='Enter email'
            name='email'
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            className='p-2 border border-gray-300 rounded-md outline-none'
            placeholder='Enter password'
            type='password'
            name='password'
            value={inputs.password}
            onChange={handleChange}
          />
          <button type='submit' className='p-4 text-white bg-blue-500 rounded-md outline-none hover:bg-blue-600'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
