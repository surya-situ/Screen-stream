import React from 'react';

import { IMG_CDN } from '../../utils/constants';

const Posters = ({posterPath, isFreeCategory}) => {

  const movieType = isFreeCategory ? 'Free' : 'Premium';
  const labelClassName = isFreeCategory ? 'bg-blue-600' : 'bg-red-500';
  
  return (
    <div>
        <img 
            src={`${IMG_CDN}${posterPath}`} 
            alt="poster" 
            className='transition-transform duration-300 ease-out rounded-lg cursor-pointer w-44 h-60 hover:scale-110'
        />

      <p className={`absolute px-2 py-1 text-sm font-semibold text-white rounded-md left-1 top-1 tracking-wider ${labelClassName}`}>
        {movieType}
      </p>
    </div>
  )
}

export default Posters