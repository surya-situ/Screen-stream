import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useFetchAndDispatchSearch from '../hooks/search/useFetchAndDispatchSearch';
import { IMG_CDN } from '../utils/constants';


const SearchPage = () => {

  const[searchInput , setSearchInput] = useState('');

  
  const handleInput = (event) => {
    setSearchInput(event.target.value)
  };
  
  useFetchAndDispatchSearch(searchInput);
  
  const searchItems = useSelector(store => store.search?.searchItems ?? [])

  return (
    <div className={`flex flex-col pl-[150px] pr-[120px] pt-20 ${searchItems.length === 0 ? 'h-screen' : ''}`}>

      <div className=''>
        <div className="relative flex items-center justify-center">
          <input
            type='text'
            value={searchInput}
            onChange={handleInput}
            placeholder='Movies, shows and more'
            className='w-screen py-4 pl-20 pr-16 text-2xl font-semibold tracking-wider text-white bg-gray-800 rounded-lg'
          />
          <div className="absolute left-5 top-4">
            <SearchOutlinedIcon sx={{ fontSize: 36, color: '#718096' }} />
          </div>
        </div>
      </div>

      {/* Display the input value at the bottom */}
      <div className="flex flex-wrap justify-center mt-8">
        {
          searchItems.filter((movie) => movie.backdrop_path).map((Movie) => (
            <div key={Movie.id} className='relative mx-6 my-6 transition-transform duration-300 hover:scale-125'>
              <Link to={`/watch/${Movie.id}`}>
              <img 
                className='w-[360px] rounded-lg overflow-hidden cursor-pointer' 
                src={IMG_CDN + Movie.backdrop_path} 
                alt={Movie.original_name || Movie.profile_path}
                style={{ margin: '-1px' }}
              />
              <div className="absolute bottom-0 left-0 p-3 text-white transition-opacity duration-300 bg-black bg-opacity-75 rounded-bl-lg rounded-br-lg opacity-0 hover:opacity-100">
                <h3 className="text-lg font-semibold">{Movie.original_title || Movie.original_name}</h3>
                <p className="text-[12px] overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{Movie.overview}</p>
              </div>
              </Link>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default SearchPage