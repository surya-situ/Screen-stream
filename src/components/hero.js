import React from 'react'
import { useSelector } from 'react-redux'

import Trailer from './Trailer'
import MovieDetails from './MovieDetails'

const Hero = () => {

  const movieDetails = useSelector(store => store.movies?.allMovies);
  
  // If movie details are not available, return early from the component
  if(movieDetails === null) return;

  // Random movie form the movieDetails array 
  const randomMovieSelect = Math.floor(Math.random() * movieDetails.length);

  const mainMovie = movieDetails[randomMovieSelect];
  
  // Destructure relevant information from the mainMovie for Trailer and Details 
  const {id, original_title, release_date, overview, vote_average} = mainMovie;

  return (
    <div className='relative'>

      <div className='absolute top-0 left-0 w-screen h-screen'>
        <Trailer movieID={id} />
      </div>

      {/* className='relative z-10' : It makes the movie details show upon the trailer video */}
      <div className='relative z-10'>
        <MovieDetails title={original_title} releaseDate={release_date} overView={overview} voteAverage={vote_average} />
      </div>
    </div>
  )
}

export default Hero;