import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addTrendingMovies } from "../../utils/movieSlice";

const useFetchAndDispatchTrendingMovies = () => {
  
    const dispatch = useDispatch();

    const getTrendingMovies = async() => {
        try {
            const fetchData = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', SCREEN_STREAM_API)
            const jsonData = await fetchData.json();
            dispatch(addTrendingMovies(jsonData.results))
        } catch (error) {
            console.log('Error in fetching', error)
        }
    };

    useEffect(() => {
        getTrendingMovies();
    },[])
}

export default useFetchAndDispatchTrendingMovies;