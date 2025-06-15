import React, { useRef } from 'react';
import { BG_URL, TMDB_SEARCH_API, API_OPTIONS } from '../utils/constants';
import lang from '../utils/languageConstans';
import { useSelector, useDispatch } from 'react-redux';
import { addGptMovieResult, clearGptMovieResults, setLoading, setError } from '../utils/gptSlice';
import { useNavigate } from 'react-router-dom';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieNames, movieResults } = useSelector(store => store.gpt);

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
      
      const searchResults = await searchMovieTMDB(query);
      
      if (!searchResults.length) {
        throw new Error("No movies found for your search");
      }
      
      const movieNames = searchResults.slice(0, 1).map(movie => movie.title);
      const moviePromises = searchResults.slice(0, 1).map(movie => 
        searchMovieTMDB(movie.title)
      );
      
      const tmdbResults = await Promise.all(moviePromises);
      
      dispatch(addGptMovieResult({
        movieNames: movieNames,
        movieResults: tmdbResults
      }));
      
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
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

      Movie Suggestions Section
      {movieNames && movieResults && (
        <div className="movie-suggestions-container">
          <h2 className="suggestions-title">{lang[langKey].suggestions}</h2>
          <div className="movie-suggestions">
            {movieResults.map((movieList, index) => (
              movieList.map(movie => (
                <div 
                  key={movie.id}
                  className="movie-suggestion-card"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img
                    src={movie.poster_path 
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` 
                      : '/placeholder.jpg'}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date && movie.release_date.substring(0, 4)}</p>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;