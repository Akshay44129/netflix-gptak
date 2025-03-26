import React from 'react'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstans'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector(store =>store.config.lang)

  return (
    <div className='gpt-main'>
         <div className='bg-gpt'>
          <img  src={BG_URL} alt="bg"></img>
            </div>
        <form  className='gptsearchform'
         >
            <input className='input-search-gpt' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='gpt-search-btn'>{lang[langKey].search} </button>
         </form>
    </div>
  )
}

export default GptSearchBar