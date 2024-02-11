import React from 'react';

import { IMG_CDN } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Banner = ({banner}) => {

    return (
      <div className='pl-[150px] pr-[50px] mt-10 max-[600px]:pl-4 max-[600px]:pr-4'>
        <div className='flex flex-row bg-gray-900 rounded-xl max-[600px]:flex-col'>
          <img 
              src={`${IMG_CDN}${banner.backdrop_path}`} 
              alt="banner"
              className='h-full rounded-s-xl max-[600px]:rounded-lg' 
          />

          <div className='relative flex flex-col w-full gap-4 my-12 ml-20 max-[600px]:m-4'>

            <div className='flex flex-row items-center mb-4'>

              <div className='flex flex-col items-center justify-center text-sm font-semibold leading-3'>
                <span>stream</span>
                <span className='text-blue-500'>special</span>
              </div>

              <h1 className='ml-4 text-4xl font-semibold max-[600px]:text-xl'>{banner.title || banner.original_name}</h1>
            </div>

            <p className='tracking-wider font-semi-bold max-[600px]:mb-16 max-[600px]:p-2'>
              Watch the {banner.title || banner.original_name} on screen-stream before it premieres anywhere else.
            </p>

            <Link to={`/watch/${banner.id}`}>
              <button className='absolute bottom-0 px-12 py-3 text-xl font-semibold tracking-wider transition duration-300 ease-in-out transform bg-gray-600 rounded-lg opacity-90 hover:scale-105 '>
                Watch trailer
              </button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
  
export default Banner;