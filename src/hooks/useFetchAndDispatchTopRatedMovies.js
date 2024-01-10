import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useFetchAndDispatchTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', SCREEN_STREAM_API)
        const json = await url.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    });
};

export default useFetchAndDispatchTopRatedMovies;