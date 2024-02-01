import { useEffect } from 'react';
import { SCREEN_STREAM_API } from '../../utils/constants'
import { useDispatch } from 'react-redux';
import { addTvVideo } from '../../utils/tvSlice';

const useFetchAndDispatchTvVideo = () => {
    const dispatch = useDispatch();
  
    const getTvVideo = async () => {
        try {
            const fetchData = await fetch(`https://api.themoviedb.org/3/tv/40862/videos?language=en-US`, SCREEN_STREAM_API);
            const jsonData = await fetchData.json();

            // const filterData = data.results.filter((video) => video.type === "Trailer");
            dispatch(addTvVideo(jsonData));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        getTvVideo();
    }, []);

}

export default useFetchAndDispatchTvVideo;
