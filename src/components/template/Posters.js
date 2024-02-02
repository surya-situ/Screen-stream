import React from 'react';

import { IMG_CDN } from '../../utils/constants';

const Posters = ({posterPath}) => {
  return (
    <div>
        <img 
            src={`${IMG_CDN}${posterPath}`} 
            alt="poster" 
            className='transition-transform duration-300 ease-out rounded-lg cursor-pointer w-44 h-60 hover:scale-110'
        />
    </div>
  )
}

export default Posters