import React, { useRef } from 'react'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstans'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {

  const langKey = useSelector(store =>store.config.lang);
  const searchText = useRef(null);


 const handleGptSearchClick = () =>{

  console.log(searchText.current.value);
  //make an api call to openai to gpt api and get moie results 

  const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  searchText.current.value +
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

const  gptResults =  openai.chat.completions.create({
  messages: [{ role: "user", content: gptQuery }],
  model: "gpt-3.5-turbo",
});

 }
  return (
    <div className='gpt-main'>
         <div className='bg-gpt'>
          <img  src={BG_URL} alt="bg"></img>
            </div>
        <form  className='gptsearchform' onSubmit={(e)=>e.preventDefault()}
         >
            <input ref={searchText} 
            className='input-search-gpt' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button  onClick={handleGptSearchClick}
            className='gpt-search-btn'>{lang[langKey].search} </button>
         </form>
    </div>
  )
}

export default GptSearchBar;