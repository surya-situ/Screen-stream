import React from 'react';
import { useSelector } from 'react-redux';

import Carousels from '../components/template/Carousels';
import Banner from '../components/template/Banner';
import useFetchAndDispatchAllMovies from '../hooks/movies/useFetchAndDispatchAllMovies'
import useFetchAndDispatchPopularMovies from '../hooks/movies/useFetchAndDispatchPopularMovies'
import useFetchAndDispatchTopRatedMovies from '../hooks/movies/useFetchAndDispatchTopRatedMovies'
import useFetchAndDispatchUpcomingMovies from '../hooks/movies/useFetchAndDispatchUpcomingMovies'
import { createSelector } from '@reduxjs/toolkit';

const selectTopRatedMovie = createSelector(
  state => state.movies.topRatedMovies,
  topRatedMovies => {
    const randomIndex = Math.floor(Math.random() * topRatedMovies.length)
    return topRatedMovies[randomIndex] || {}
  }
);

const MoviePage = () => {

  useFetchAndDispatchAllMovies();
  useFetchAndDispatchPopularMovies();
  useFetchAndDispatchTopRatedMovies();
  useFetchAndDispatchUpcomingMovies();

  const movies = useSelector(store => store.movies ?? []);
  const banner = useSelector(selectTopRatedMovie)

  return (
    <div className='flex flex-col'>

      <Banner banner={banner} />

      <Carousels title={"Now playing"} movies={movies.allMovies} />
      <Carousels title={"Popular movies"} movies={movies.popularMovies} />
      <Carousels title={"Top Rated "} movies={movies.topRatedMovies} />
      <Carousels title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  )
}

export default MoviePage