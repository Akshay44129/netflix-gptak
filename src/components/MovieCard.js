import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className='mc-main'>
        <img alt='Movie card'
        src={IMG_CDN_URL + posterPath }
        />
      
    </div>
  )
}

export default MovieCard;