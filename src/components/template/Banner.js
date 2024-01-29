import React from 'react';

import { IMG_CDN } from '../../utils/constants';

const Banner = ({banner}) => {

    return (
      <div className='pl-[150px] pr-[50px] mt-10'>
        <div className='flex flex-row bg-gray-950 rounded-xl'>
          <img 
              src={`${IMG_CDN}${banner.backdrop_path}`} 
              alt="banner"
              className='rounded-s-xl h-60' 
          />

          <div className='flex flex-col my-10 ml-20'>

            <div className='flex flex-row items-center justify-center mb-4'>

              <div className='flex flex-col items-center justify-center text-sm font-semibold leading-3'>
                <span>stream</span>
                <span className='text-green-500'>special</span>
              </div>

              <h1 className='ml-4 text-4xl font-semibold'>{banner.title || banner.original_name}</h1>
            </div>

            <p className='flex items-center text-sm font-medium'>
              <span className='font-normal opacity-90'>
                {
                  banner.release_date ? "Release data" : "First aired"
                }
              </span>
              <span className='ml-2 text-xl text-green-500'>{banner.release_date || banner.first_air_date } </span>
            </p>

            <p className='flex items-center text-sm font-medium'>
              <span className='font-normal opacity-90'>Voting average </span>
              <span className='ml-2 text-xl text-green-500 mr-[3px]'>{Math.round(banner.vote_average) }</span> 
              <span className='text-xl'>/ 10</span>
            </p>
          </div>

        </div>
      </div>
    )
  }
  
export default Banner;