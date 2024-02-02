import { useSelector } from 'react-redux';

import Carousels from './template/Carousels';

const Features = () => {
  
  const movies = useSelector(store => store.movies ?? []);
  const tv = useSelector(store => store.tv ?? []);
  const people = useSelector(store => store.people ?? []);

  return (
    <div>

      <Carousels title={"Now playing"} movies={movies.allMovies} />
      <Carousels title={"Popular movies"} movies={movies.popularMovies} />

      <Carousels title={"Top rated shows"} movies={tv.topRatedTv} />

      <Carousels title={"Top Rated movies"} movies={movies.topRatedMovies} />
      <Carousels title={"Upcoming movies"} movies={movies.upcomingMovies} />

      <Carousels title={"Popular shows"} movies={tv.popularTv} />
      <Carousels title={"On the air shows"} movies={tv.onTheAirTv} />

      <Carousels title={"Today trending movies"} movies={movies.trendingMovies} />

      <Carousels title={"Airing Today  shows"} movies={tv.airingToday} />
      <Carousels title={"Today trending shows"} movies={tv.trendingShows} />

      <Carousels title={"Popular figures"} movies={people.popularPeople} />
      
    </div>
  );
}

export default Features;
