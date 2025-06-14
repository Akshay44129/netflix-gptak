import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
   
  return (
   <div className="movie-list-container">
  <div className="movie-list-wrapper">
    <h1 className="movie-list-title">{title}</h1>
    <div className="movie-list-scroller">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id} 
          posterPath={movie.poster_path} 
          className="movie-list-card"
        />
      ))}
    </div>
  </div>
</div>
  );
};

export default MovieList;