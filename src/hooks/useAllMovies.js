import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { SCREEN_STREAM_API } from "../utils/constants";
import { addAllMovies } from "../utils/movieSlice";


const useAllMovies = () => {

    const dispatch = useDispatch()

    const getAllMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', SCREEN_STREAM_API)
        const json = await data.json()
        dispatch(addAllMovies(json.results))
    }

    useEffect(() => {
        getAllMovies()
    },[])

}

export default useAllMovies;