import { useSelector } from 'react-redux';
import useFetchAndDispatchVideo from '../hooks/movies/useFetchAndDispatchMovieVideo';

const Video = ({movieID}) => {

    const movieVideo = useSelector(store => store.movies?.movieVideo ?? []);

    useFetchAndDispatchVideo({movieID})

  return (
    <div>
      <iframe 
        className='w-screen h-fit aspect-video'
        src={`https://www.youtube.com/embed/${movieVideo?.key}?version=3&showinfo=1&loop=1&mute=1`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default Video