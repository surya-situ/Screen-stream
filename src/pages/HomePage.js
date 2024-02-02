import Hero from '../components/hero'
import Features from '../components/Features'

// MOVIES
import useFetchAndDispatchAllMovies from '../hooks/movies/useFetchAndDispatchAllMovies'
import useFetchAndDispatchPopularMovies from '../hooks/movies/useFetchAndDispatchPopularMovies'
import useFetchAndDispatchTopRatedMovies from '../hooks/movies/useFetchAndDispatchTopRatedMovies'
import useFetchAndDispatchUpcomingMovies from '../hooks/movies/useFetchAndDispatchUpcomingMovies'
import useFetchAndDispatchTrendingMovies from '../hooks/movies/useFetchAndDispatchTrendingMovies'

// TV SERIES
import useFetchAndDispatchAiringTodayTv from '../hooks/televison/useFetchAndDispatchAiringTodayTv'
import useFetchAndDispatchOnTheAirTv from '../hooks/televison/useFetchAndDispatchOnTheAirTv'
import useFetchAndDispatchPopularTv from '../hooks/televison/useFetchAndDispatchPopularTv'
import useFetchAndDispatchTopRatedTv from '../hooks/televison/useFetchAndDispatchTopRatedTv'
import useFetchAndDispatchTrendingShows from '../hooks/televison/useFetchAndDispatchTrendingTv'

// POPULAR FIGURES
import useFetchAndDispatchPopularPeople from '../hooks/people/useFetchAndDispatchPopularPeople'

const HomePage = () => {

  // MOVIES
  useFetchAndDispatchAllMovies();
  useFetchAndDispatchPopularMovies();
  useFetchAndDispatchTopRatedMovies();
  useFetchAndDispatchUpcomingMovies();
  useFetchAndDispatchTrendingMovies()

  // TV SERIES
  useFetchAndDispatchAiringTodayTv();
  useFetchAndDispatchOnTheAirTv();
  useFetchAndDispatchPopularTv();
  useFetchAndDispatchTopRatedTv();
  useFetchAndDispatchTrendingShows()

  // POPULAR FIGURES
  useFetchAndDispatchPopularPeople();


  return (
    <div >
      <Hero />
      <Features />
    </div>
  )
}

export default HomePage