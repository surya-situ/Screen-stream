import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addOnTheAirTv } from "../../utils/tvSlice";

const useFetchAndDispatchAiringTodayTv = () => {

    const dispatch = useDispatch();

    const getAiringTodayTv = async () => {

        try {
            const url = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await url.json();
            dispatch(addOnTheAirTv(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error)
        }
    };

    useEffect(() => {
        getAiringTodayTv();
    },[]);
};

export default useFetchAndDispatchAiringTodayTv;