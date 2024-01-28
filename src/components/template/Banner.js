import React from 'react';

import { IMG_CDN } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

// Create a memoized selector using createSelector
const selectTopRatedMovie = createSelector(
  state => state.movies.topRatedMovies,
  topRatedMovies => topRatedMovies[0] || {} // Return an empty object as fallback
);

const Banner = () => {

  const bannerMovie = useSelector(selectTopRatedMovie);

    return (
      <div className='pl-[150px] pr-[50px] mt-10'>
        <div className='flex flex-row bg-gray-950 rounded-xl'>
          <img 
              src={`${IMG_CDN}${bannerMovie.backdrop_path}`} 
              alt="banner"
              className='rounded-s-xl h-60' 
          />

          <div className='flex flex-col my-10 ml-20'>

            <div className='flex flex-row items-center justify-center'>

              <div className='flex flex-col items-center justify-center text-sm font-semibold leading-3'>
                <span>stream</span>
                <span className='text-green-500'>special</span>
              </div>

              <h1 className='ml-4 text-2xl font-semibold'>{bannerMovie.title}</h1>
            </div>

            <p className='text-sm font-medium'>Release data {bannerMovie.release_date}</p>
            <p className='text-sm font-medium'>Voting average {Math.round(bannerMovie.vote_average)} / 10</p>
          </div>

        </div>
      </div>
    )
  }
  
export default Banner;