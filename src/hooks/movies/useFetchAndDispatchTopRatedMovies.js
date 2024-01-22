import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addTopRatedMovies } from "../../utils/movieSlice";

const useFetchAndDispatchTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {

        try {
            const url = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await url.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    });
};

export default useFetchAndDispatchTopRatedMovies;