import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  
  if (!movieNames) return null;

  return (
    <div className="movie-suggestions-container">
      <h2 className="section-title">Recommended Movies For You</h2>
      <div className="movie-suggestions-list">
        {movieNames.map((movieName, index) => (
          <div className="movie-suggestion-card" key={movieName}>
            <MovieList
              title={movieName}
              movies={movieResults[index]}
            />
          </div>
        ))}
      </div>
    </div>
  )
};

export default GptMovieSuggestions;