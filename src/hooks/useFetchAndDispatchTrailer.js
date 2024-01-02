import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

// useEffect(() => {
//   const fetchMovieTrailer = async () => {
//     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, SCREEN_STREAM_API)
//     const json = await data.json();

//     const filterData = json.results.filter((video)=> video.type === "Trailer")
//     const trailer = filterData.length ? filterData[0] : json.results[0]
//     setTrailer(trailer)
//   };

//   fetchMovieTrailer();
// },[movieID])


const useFetchAndDispatchMovieTrailer = ({movieID}) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, SCREEN_STREAM_API)
        const json = await data.json();

        const filterData = json.results.filter((video)=> video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addMovieTrailer(trailer));
    };

    useEffect(() => {
        getMovieTrailer();
    },[]);
};

export default useFetchAndDispatchMovieTrailer;
