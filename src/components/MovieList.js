import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
   
  return (
    <div> 
        <div className='main-movielist'>
            <h1 className='h1-ml'>{title}</h1>
            <div className='movielist-path'> 
                {movies.map((movie) => 
                ( <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
               
            </div>
        </div>
    </div>
  );
};

export default MovieList;