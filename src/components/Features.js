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
      <Carousels title={"Top Rated "} movies={movies.topRatedMovies} />
      <Carousels title={"Upcoming Movies"} movies={movies.upcomingMovies} />

      <Carousels title={"Airing Today Tv"} movies={tv.airingToday} />
      <Carousels title={"Top rated Tv"} movies={tv.topRatedTv} />
      <Carousels title={"on the air Tv"} movies={tv.onTheAirTv} />
      <Carousels title={"Popular Tv"} movies={tv.popularTv} />

      <Carousels title={"Popular persons"} movies={people.popularPeople} />
      
    </div>
  );
}

export default Features;
