import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Video from '../components/Video'
import useFetchAndDispatchAllMovies from '../hooks/movies/useFetchAndDispatchAllMovies';
import useFetchAndDispatchPopularMovies from '../hooks/movies/useFetchAndDispatchPopularMovies';
import useFetchAndDispatchTopRatedMovies from '../hooks/movies/useFetchAndDispatchTopRatedMovies'
import useFetchAndDispatchUpcomingMovies from '../hooks/movies/useFetchAndDispatchUpcomingMovies'

const WatchPage = () => {

  const { id: movieId } = useParams();
  const idNumber = parseInt(movieId);

  useFetchAndDispatchAllMovies();
  useFetchAndDispatchPopularMovies()
  useFetchAndDispatchTopRatedMovies();
  useFetchAndDispatchUpcomingMovies();

  
  const allMovies = useSelector(state => state.movies?.allMovies);
  const popularMovies = useSelector(state => state.movies?.popularMovies ?? []);
  const topRatedMovies = useSelector(state => state.movies?.topRatedMovies ?? []);
  const upcomingMovies = useSelector(state => state.movies?.upcomingMovies ?? []);
  
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
  
  const {id, original_title, overview} = selectedMovie
  

  return (
    <div className='flex flex-col items-center justify-center h-screen pl-[150px]'>
      <Video movieID={id}/>
    
      {selectedMovie ? (
        <div className='flex flex-col'>
          <h3>Title: {original_title}</h3>
          <p>Description: {overview}</p>
        </div>
      ) : (
        <div>Movie not found</div>
      )}
  </div>
  )
}

export default WatchPage