import { useDispatch } from "react-redux";
import { SCREEN_STREAM_API } from "../../utils/constants";


import { addRecommendedMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useFetchAndDispatchRecommendedMovies = ({idNumber}) => {

    const dispatch = useDispatch()
  
    const getRecommendedMovies = async () => {

        try {
            const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${idNumber}/recommendations?language=en-US&page=1`, SCREEN_STREAM_API)
            const jsonData = await fetchData.json()
            dispatch(addRecommendedMovies(jsonData.results))
        }
        catch(error) {
            console.log('Error in fetching', error);
        }
    };

    useEffect(() => {
        getRecommendedMovies()
    },[])
}

export default useFetchAndDispatchRecommendedMovies;