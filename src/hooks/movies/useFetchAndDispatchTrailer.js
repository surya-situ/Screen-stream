import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addMovieTrailer } from "../../utils/movieSlice";


const useFetchAndDispatchMovieTrailer = ({movieID}) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async() => {

        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, SCREEN_STREAM_API)
            const json = await data.json();

            const filterData = json.results.filter((video)=> video.type === "Trailer")
            const trailer = filterData.length ? filterData[0] : json.results[0]
            dispatch(addMovieTrailer(trailer));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getMovieTrailer();
    },[]);

    // Return something if needed, such as the trailer data or a function to manually trigger the fetch
    return {
        fetchMovieTrailer: getMovieTrailer,
    };
};

export default useFetchAndDispatchMovieTrailer;
