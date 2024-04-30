import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Video from '../components/Video'
import Carousels from '../components/template/Carousels'

import useFetchAndDispatchAllMovies from '../hooks/movies/useFetchAndDispatchAllMovies';
import useFetchAndDispatchPopularMovies from '../hooks/movies/useFetchAndDispatchPopularMovies';
import useFetchAndDispatchTopRatedMovies from '../hooks/movies/useFetchAndDispatchTopRatedMovies'
import useFetchAndDispatchUpcomingMovies from '../hooks/movies/useFetchAndDispatchUpcomingMovies'
import useFetchAndDispatchSimilarMovies from '../hooks/movies/useFetchAndDispatchSimilarMovies';
import useFetchAndDispatchRecommendedMovies from '../hooks/movies/useFetchAndDispatchRecommendedMovies';

const WatchPage = () => {

  const { id: movieId } = useParams();
  const idNumber = parseInt(movieId);

  useFetchAndDispatchAllMovies();
  useFetchAndDispatchPopularMovies()
  useFetchAndDispatchTopRatedMovies();
  useFetchAndDispatchUpcomingMovies();

  useFetchAndDispatchSimilarMovies({idNumber})
  useFetchAndDispatchRecommendedMovies({idNumber})

  
  const allMovies = useSelector(state => state.movies?.allMovies);
  const popularMovies = useSelector(state => state.movies?.popularMovies ?? []);
  const topRatedMovies = useSelector(state => state.movies?.topRatedMovies ?? []);
  const upcomingMovies = useSelector(state => state.movies?.upcomingMovies ?? []);

  const recommendedMovies = useSelector(state => state.movies?.recommendedMovies ?? []);
  const similarMovies = useSelector(state => state.movies?.similarMovies ?? []);


  
  if(allMovies === null) return;

  // Check if movies is null or empty
  if (!allMovies || !popularMovies || !topRatedMovies || !upcomingMovies) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>; // or any loading indicator you prefer
  }

  // Combine all movie lists into one array
  const allMovieLists = [allMovies, popularMovies, topRatedMovies, upcomingMovies]; // Add other movie lists as needed
  const allMoviesCombined = allMovieLists.reduce((accumulator, currentList) => [...accumulator, ...currentList], []);
  
  // Find the movie with the matching ID from the store
  const selectedMovie = allMoviesCombined.find(movie => movie.id === idNumber);

  if (!selectedMovie) {
    return( 
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-8 font-bold text-red-600 text-8xl'>Oops!</h1>
        <p className='mb-10 text-xl font-semibold tracking-wider opacity-70 max-[600px]:pl-4'>To watch premium movies, Tv shows and many more take subscription</p>
        <Link to="/subscriptionPage">
          <button className='px-10 py-3 text-xl font-semibold tracking-wider transition duration-500 transform rounded-lg bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-950 hover:scale-105'>Subscribe now</button>
        </Link>
      </div>
    )
  }
  
  const {id, original_title, overview} = selectedMovie
  

  return (
    <div className='flex flex-col'>
      <Video movieID={id}/>
    
      <div className='ml-[150px]'>
          <div className='flex flex-col'>
            <h3 className='mb-8 text-6xl font-bold text-blue-500 '>{original_title}</h3>
            <p className='w-1/2 text-lg tracking-wider opacity-60 '>{overview}</p>
          </div>
      </div>

      <Carousels title={"Similar movies"} movies={similarMovies}/>

      <Carousels title={"Recommended movies"} movies={recommendedMovies}/>
  </div>
  )
}

export default WatchPage