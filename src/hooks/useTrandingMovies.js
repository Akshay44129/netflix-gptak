import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrendingMovies } from '../utils/moviesSlice';

const useTrandingMovies = () => {
    const dispatch = useDispatch();

    const getTrandingMovies = useCallback(async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        getTrandingMovies();
    }, [getTrandingMovies]);
};

export default useTrandingMovies;