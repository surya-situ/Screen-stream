import { useSelector } from 'react-redux';
import useFetchAndDispatchMovieTrailer from '../hooks/useFetchAndDispatchTrailer';

const Trailer = ({movieID}) => {

  const trailer = useSelector(store => store.movies.movieTrailer)

  useFetchAndDispatchMovieTrailer({movieID});

  return (
    <div className=''>
      <iframe 
        className='w-screen h-auto aspect-video'
        src={`https://www.youtube.com/embed/${trailer?.key}?version=3&autoplay=1&controls=0&showinfo=0&loop=1&mute=1&autohide=2&disablekb=1&rel=0&modestbranding=1&iv_load_policy=3`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default Trailer