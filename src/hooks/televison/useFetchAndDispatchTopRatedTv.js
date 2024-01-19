import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SCREEN_STREAM_API } from "../../utils/constants";
import { addTopRatedTv } from "../../utils/tvSlice";

const useFetchAndDispatchAiringTodayTv = () => {

    const dispatch = useDispatch();

    const getAiringTodayTv = async () => {

        try {
            const url = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', SCREEN_STREAM_API)
            const json = await url.json();
            dispatch(addTopRatedTv(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getAiringTodayTv();
    },[]);
};

export default useFetchAndDispatchAiringTodayTv;