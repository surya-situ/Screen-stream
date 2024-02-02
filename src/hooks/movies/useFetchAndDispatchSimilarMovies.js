import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { addSimilarMovies } from "../../utils/movieSlice";
import { SCREEN_STREAM_API } from "../../utils/constants"


const useFetchAndDispatchSimilarMovies = ({idNumber}) => {

    const dispatch = useDispatch()

    const getSimilarMovies = async () => {

        try {
            const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${idNumber}/similar?language=en-US&page=1`, SCREEN_STREAM_API);
            const jsonData = await fetchData.json()
            dispatch(addSimilarMovies(jsonData.results))
        } catch (error) {
            console.log('Error fetching data', error);
        }
        
    }

    useEffect(() => {
        getSimilarMovies()
    },[])
}

export default useFetchAndDispatchSimilarMovies;