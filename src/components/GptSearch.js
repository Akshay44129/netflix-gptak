import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestions';

 const GptSearch = () => {
  return (<div>
         <GptSearchBar/>
         <GptMovieSuggestion />
         </div>
  )
}
 export default GptSearch;