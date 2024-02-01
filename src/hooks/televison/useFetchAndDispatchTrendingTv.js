import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addTrendingShows } from "../../utils/tvSlice";

const useFetchAndDispatchTrendingShows = () => {
  
    const dispatch = useDispatch();

    const getTrendingShows = async() => {
        try {
            const fetchData = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', SCREEN_STREAM_API)
            const jsonData = await fetchData.json();
            dispatch(addTrendingShows(jsonData.results))
        } catch (error) {
            console.log('Error in fetching', error)
        }
    };

    useEffect(() => {
        getTrendingShows();
    },[])
}

export default useFetchAndDispatchTrendingShows;