import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addAllMovies } from "../../utils/movieSlice";


const useFetchAndDispatchAllMovies = () => {

    const dispatch = useDispatch()

    const getAllMovies = async() => {

        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await data.json()
            dispatch(addAllMovies(json.results))
        } catch (error) {
            // Handle errors here
            console.error("Error fetching popular movies:", error);
        }
    }

    useEffect(() => {
        getAllMovies()
    },[])

    // Return something if needed, such as a function to manually trigger the fetch
    return {
        fetchAllMovies: getAllMovies,
    };

}

export default useFetchAndDispatchAllMovies;