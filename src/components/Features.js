import React from 'react';
import { useSelector } from 'react-redux';

const Features = () => {
  const IMG_CDN = "https://image.tmdb.org/t/p/w500";

  const moviePoster = useSelector(store => store.movies?.allMovies ?? []);
  console.log(moviePoster);

  return (
    <div className='flex overflow-x-auto no-scrollbar pl-[150px] my-8'>
    <div className='flex'>
      {
        moviePoster.map((movie) => (
          <img key={movie.id} src={`${IMG_CDN}${movie.poster_path}`} alt="poster" className='mr-6 cursor-pointer h-60'/>
        ))
      }
      </div>
    </div>
  )
}

export default Features