import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/movieSlice";

const useFetchAndDispatchUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies  = async () => {

        try {
            const url = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await url.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    },[])
};

export default useFetchAndDispatchUpcomingMovies;