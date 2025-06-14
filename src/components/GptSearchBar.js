import React, { useRef } from 'react';
import { BG_URL, TMDB_SEARCH_API, API_OPTIONS } from '../utils/constants';
import lang from '../utils/languageConstans';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addGptMovieResult,clearGptMovieResults, setLoading, setError} from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `${TMDB_SEARCH_API}${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
  const query = searchText.current.value;
  if (!query) return;

  try {
    dispatch(setLoading(true));
    dispatch(clearGptMovieResults());
    
    // Search TMDB API
    const searchResults = await searchMovieTMDB(query);
    
    if (!searchResults.length) {
      throw new Error("No movies found for your search");
    }
    
    // Process results
    const movieNames = searchResults.slice(0, 5).map(movie => movie.title);
    const moviePromises = searchResults.slice(0, 5).map(movie => 
      searchMovieTMDB(movie.title)
    );
    
    const tmdbResults = await Promise.all(moviePromises);
    
    dispatch(addGptMovieResult({
      movieNames: movieNames,
      movieResults: tmdbResults
    }));
    
  } catch (error) {
    dispatch(setError(error.message));
  }
};

  return (
    <div className='gpt-main'>
      <div className='bg-gpt'>
        <img src={BG_URL} alt="bg" />
      </div>
      <form className='gptsearchform' onSubmit={(e) => e.preventDefault()}>
        <input 
          ref={searchText} 
          className='input-search-gpt' 
          type='text' 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button 
          onClick={handleGptSearchClick}
          className='gpt-search-btn'
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;