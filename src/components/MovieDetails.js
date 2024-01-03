import React, { useState } from 'react'

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

const MovieDetails = ({title, releaseDate, overView, voteAverage}) => { 

  const roundedVoteAvg = Math.round(voteAverage);

  const [mute, setMute] = useState(false)

  const handleMuteUnmute = () => {
    setMute(!mute)
  };

  return (
    <div className='my-5 '>

      <div 
        className='flex flex-col justify-center align-middle  pl-[150px] text-white bg-gradient-to-r from-black w-screen aspect-video'
      >
        {/* movie title */}
        <h1 className='mb-3 font-sans text-6xl font-medium opacity-90'>
          {title}
        </h1>

        <div className='flex flex-row mt-7'>
          {/* release date of the movie */}
          <p className='mb-3 mr-5 font-bold text-blue-400'>
            <span className='mr-2 font-thin text-white opacity-70'>Release data </span>
            {releaseDate}
          </p>
          {/* average rating */}
          <p>
            <span className='font-thin text-white opacity-70'>AVG rating</span>
            <span className='px-2 ml-1 font-bold text-blue-400'>{roundedVoteAvg} / 10</span> 
          </p>
        </div>
        
        
        {/* overview of the movie */}
        <p className='font-sans font-medium opacity-60 w-96 '>
          {overView}
        </p>

        <div className='flex flex-row items-center mt-7'>
          {/* watch movie button */}
          <div className='flex items-center justify-center py-2 mr-5 rounded-lg w-80' 
            style={{ backgroundColor: "rgba(209, 206, 206, 0.12)" }}
          >
            <button className='flex items-center justify-center text-2xl font-bold text-white opacity-100'>
              <PlayArrowRoundedIcon />
              <span className='ml-4'>Watch now</span>
            </button>
          </div>

          {/* mute and unmute option */}
          <div>
            <button 
              className='flex items-center justify-center h-12 font-bold rounded-lg w-14' 
              style={{ backgroundColor: "rgba(209, 206, 206, 0.12)" }}
              onClick={handleMuteUnmute}
            >
              {
                mute ? <VolumeUpRoundedIcon /> : <VolumeOffRoundedIcon />
              } 
            </button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default MovieDetails