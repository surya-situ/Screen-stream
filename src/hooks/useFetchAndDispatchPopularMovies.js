import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const useFetchAndDispatchPopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const url = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await url.json();
            dispatch(addPopularMovies(json.results))
        } catch (error) {
            // Handle errors here
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default useFetchAndDispatchPopularMovies;
