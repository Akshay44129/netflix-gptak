import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlyingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = useCallback(async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlyingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        getNowPlayingMovies();
    }, [getNowPlayingMovies]);
};

export default useNowPlayingMovies;