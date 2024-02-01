import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addMovieVideo } from "../../utils/movieSlice";

const useFetchAndDispatchVideo = ({movieID}) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, SCREEN_STREAM_API)
            const json = await data.json();

            const filterData = json.results.filter((video)=> video.type === "Trailer")
            const movieVideo = filterData.length ? filterData[0] : json.results[0];
            dispatch(addMovieVideo(movieVideo))
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    }

    useEffect(() => {
        getMovieVideo();
    },[])
}

export default useFetchAndDispatchVideo;