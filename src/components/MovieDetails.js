import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
// import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);
  // const langKey = useSelector(store => store.config.lang);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          API_OPTIONS
        );
        console.log(response);
        const data = await response.json();
        setMovieDetails(data);
        
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
          alt={movieDetails.title}
        />
      </div>
      <div className="movie-info">
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Rating: {movieDetails.vote_average}/10</p>
        
      </div>
    </div>
  );
};

export default MovieDetails;