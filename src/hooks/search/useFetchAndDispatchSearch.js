import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { SCREEN_STREAM_API } from '../../utils/constants';
import { addSearch } from '../../utils/searchSlice';

const useFetchAndDispatchSearch = (searchQuery) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getSearchResult = async () => {
        try {
          const fetchData = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
            SCREEN_STREAM_API
          );
          const jsonData = await fetchData.json();
          dispatch(addSearch(jsonData.results));
        } catch (error) {
          console.log('Error in fetching', error);
        }
      };
  
      if (searchQuery.trim() !== '') {
        getSearchResult();
      }
    }, [searchQuery, dispatch]);
  
    // No need to return anything from a custom hook
  };
  
  export default useFetchAndDispatchSearch;