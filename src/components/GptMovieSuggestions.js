import React from 'react'
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
   const {movieResult,movieNames}= useSelector((store)=>store.gpt);
   if(!movieNames)
    return null;


  return (
    <div>new</div>
    // <div className='suggestion-gpt'>
    //   {movieNames.map((movieName, index)  => <MovieList
    //    key = {movieName}
    //    title={movieName}
    //     movies ={movieResult[index]} />)}
      
    // </div>
  )
};

export default GptMovieSuggestions;