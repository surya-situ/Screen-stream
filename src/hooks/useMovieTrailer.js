import {useEffect} from 'react'

import { SCREEN_STREAM_API } from '../utils/constants'

const useMovieTrailer = () => {

    const getMovieTrailer = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/695721/videos?language=en-US', SCREEN_STREAM_API )
        const json = data.json()
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])

}

export default useMovieTrailer